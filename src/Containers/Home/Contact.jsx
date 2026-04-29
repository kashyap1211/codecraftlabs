import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import toast from "react-hot-toast";

const Contact = () => {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", service: "", message: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);
    toast.loading("Sending message...", { id: "send" });

    try {
      const formData = new FormData();
      Object.keys(form).forEach(key => {
        formData.append(key, form[key]);
      });

      await fetch("https://script.google.com/macros/s/AKfycbyuUC8e5btv24PjcpDDs1xCcXR2kJeZTcn6U_qi8_P4b4BGYHH4tWQler6CmsUAZKq_pA/exec", {
        method: "POST",
        body: formData,
        mode: "no-cors",
      });

      // ⚠️ Always assume success (because no-cors)
      toast.success("Message sent successfully", { id: "send" });

      setForm({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });

    } catch (err) {
      console.error(err);
      toast.error("Network error", { id: "send" });
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="relative w-full py-28 bg-gradient-to-br from-white via-[#f8fffb] to-[#ecfdf5] overflow-hidden">

      {/* Grid BG */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0,168,107,0.05) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(0,168,107,0.05) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-[#00A86B]/20 blur-[60px]" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#22C55E]/20 blur-[60px]" />

      {/* ✅ FIXED CONTAINER SPACING */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <span className="inline-flex items-center gap-2 bg-[#00A86B]/10 border border-[#00A86B]/20 text-[#00A86B] px-4 py-1.5 rounded-full text-xs font-semibold uppercase">
            Contact Us
          </span>

          <h2 className="text-4xl sm:text-5xl font-bold text-[#0B132B] leading-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Let’s Discuss Your{" "}
            <span className="bg-gradient-to-r from-[#00A86B] via-[#22C55E] to-[#FACC15] bg-clip-text text-transparent">
              Project
            </span>
          </h2>

          <p className="text-gray-600 max-w-md">
            Whether you need a website, mobile app, or digital growth strategy —
            we’re here to help you turn ideas into impactful digital solutions.
          </p>

          <div className="space-y-4">
            {[
              { icon: <FaEnvelope />, label: "Email", val: "codecraftlabs4668@gmail.com" },
              { icon: <FaPhoneAlt />, label: "Phone", val: "+91 8140520747" },
              { icon: <FaMapMarkerAlt />, label: "Location", val: "Ahmedabad, India" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-4 rounded-xl bg-white border border-[#00A86B]/10 shadow-sm"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#00A86B]/10 text-[#00A86B]">
                  {item.icon}
                </div>
                <div>
                  <p className="text-gray-500 text-xs">{item.label}</p>
                  <p className="text-[#0B132B] text-sm font-medium">{item.val}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="relative bg-white border border-gray-200 rounded-3xl p-10 shadow-xl">

            <h3 className="text-[#0B132B] text-xl font-semibold mb-6">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">

              {/* <div className="grid grid-cols-2 gap-4"> */}
                <input
                  className="input"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                />
                <input
                  className="input"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email"
                />
              {/* </div> */}
              <input
                className="input"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone Number"
              />

              <select
                className="input"
                name="service"
                value={form.service}
                onChange={handleChange}
              >
                <option value="">Select Service</option>
                <option>Website Development</option>
                <option>App Development</option>
                <option>UI/UX Design</option>
                <option>Other</option>

              </select>

              <textarea
                className="input"
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                placeholder="Message"
              />
              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 rounded-xl font-semibold transition-all duration-300
  ${loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-[#00A86B] cursor-pointer to-[#22C55E] hover:scale-[1.02] hover:shadow-lg"}
  text-white`}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

            </form>

          </div>
        </motion.div>

      </div>

      {/* reusable input style */}
      <style>{`
        .input{
          width:100%;
          padding:12px 16px;
          border-radius:12px;
          border:1px solid #e5e7eb;
          background:#f9fafb;
          outline:none;
        }
        .input:focus{
          border-color:#00A86B;
          box-shadow:0 0 0 3px rgba(0,168,107,0.15);
        }
      `}</style>

    </section>
  );
};

export default Contact;