import React, { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaCommentDots,
  FaArrowRight,
} from "react-icons/fa";
import toast from "react-hot-toast";


const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}
          <div className="space-y-8">

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B132B] font-grotesk leading-tight">
              Get In{" "}
              <span className="bg-gradient-to-r from-[#00A86B] via-[#22C55E] to-[#FACC15] bg-clip-text text-transparent">
                Touch
              </span>
            </h2>

            <p className="text-gray-600 leading-relaxed max-w-md font-grotesk">
              Whether you're launching a new idea or scaling your business,
              we’re here to help you build powerful digital experiences.
              Let’s connect and make it happen.
            </p>

            {/* Info Cards */}
            <div className="space-y-4">

              <div className="flex items-center gap-4 p-4 bg-white/80 backdrop-blur-xl rounded-2xl border border-[#00A86B]/10 shadow-md hover:shadow-lg transition">
                <FaEnvelope className="text-[#00A86B] text-lg" />
                <div>
                  <p className="text-xs text-gray-400">Email</p>
                  <p className="text-sm text-gray-700 font-medium">
                    codecraftlabs4668@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white/80 backdrop-blur-xl rounded-2xl border border-[#00A86B]/10 shadow-md hover:shadow-lg transition">
                <FaPhone className="text-[#00A86B] text-lg" />
                <div>
                  <p className="text-xs text-gray-400">Phone</p>
                  <p className="text-sm text-gray-700 font-medium">
                    +91 8140520747
                  </p>
                </div>
              </div>

            </div>

            {/* Highlight Box */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-[#00A86B]/10 to-[#22C55E]/10 border border-[#00A86B]/20">
              <p className="text-sm text-gray-700 font-grotesk">
                ⚡ We usually respond within <b>24 hours</b>. Let’s build something amazing together.
              </p>
            </div>

          </div>

          {/* RIGHT FORM */}
          <div className="relative">

            {/* Glow Border */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#00A86B]/20 via-[#22C55E]/20 to-[#FACC15]/20 blur-xl opacity-60" />

            <div className="relative p-8 rounded-3xl bg-white/80 backdrop-blur-xl border border-white/40 shadow-2xl">

              <form onSubmit={handleSubmit} className="space-y-5 font-grotesk">

                {/* Input Style */}
                {[
                  { name: "name", icon: <FaUser />, placeholder: "Your Name", type: "text" },
                  { name: "email", icon: <FaEnvelope />, placeholder: "Your Email", type: "email" },
                  { name: "phone", icon: <FaPhone />, placeholder: "Phone Number", type: "text" },
                ].map((field, i) => (
                  <div key={i} className="relative group">
                    <span className="absolute top-4 left-4 text-gray-400 group-focus-within:text-[#00A86B]">
                      {field.icon}
                    </span>
                    <input
                      type={field.type}
                      name={field.name}
                      value={form[field.name]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 bg-white/70 focus:bg-white focus:border-[#00A86B] outline-none transition"
                    />
                  </div>
                ))}

                {/* Message */}
                <div className="relative group">
                  <FaCommentDots className="absolute top-4 left-4 text-gray-400 group-focus-within:text-[#00A86B]" />
                  <textarea
                    name="message"
                    value={form.message}
                    rows="4"
                    placeholder="Your Message"
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 bg-white/70 focus:bg-white focus:border-[#00A86B] outline-none transition"
                  />
                </div>

                {/* Button */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#00A86B] to-[#22C55E] cursor-pointer text-white py-3 rounded-xl font-semibold transition duration-300 hover:scale-[1.03] hover:shadow-xl"
                >
                  Send Message <FaArrowRight />
                </button>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactForm;