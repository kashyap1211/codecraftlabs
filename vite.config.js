// // import { defineConfig } from 'vite'
// // import react from '@vitejs/plugin-react'
// // import tailwindcss from '@tailwindcss/vite'


// // // https://vite.dev/config/
// // export default defineConfig({
// //   plugins: [react(), tailwindcss()],
// //   build: {
// //     target: 'esnext',
// //     minify: 'terser',
// //     terserOptions: {
// //       compress: {
// //         drop_console: true,
// //         drop_debugger: true,
// //       },
// //     },
// //     rollupOptions: {
// //       output: {
// //         manualChunks: {
// //           vendor: ['react', 'react-dom', 'react-router-dom'],
// //           animations: ['framer-motion'],
// //           ui: ['lucide-react', 'react-icons'],
// //         },
// //       },
// //     },
// //     chunkSizeWarningLimit: 1000,
// //   },
// // })
// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'

// export default defineConfig({
//   plugins: [react(), tailwindcss()],
//   build: {
//     target: 'esnext',
//     minify: 'terser',
//     terserOptions: {
//       compress: {
//         drop_console: true,
//         drop_debugger: true,
//       },
//     },
//     rollupOptions: {
//       output: {
//         manualChunks(id) {
//           if (id.includes('node_modules')) {
//             if (id.includes('framer-motion')) return 'animations'
//             if (id.includes('lucide-react') || id.includes('react-icons')) return 'ui'
//             return 'vendor'
//           }
//         }
//       }
//     },
//     chunkSizeWarningLimit: 1000,
//   },
// })


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    target: 'esnext',
    // minify भी अभी हटा दो ताकि terser issue ना आए
    chunkSizeWarningLimit: 1000,
  },
})