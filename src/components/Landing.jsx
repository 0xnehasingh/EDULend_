// import React, { useState, useEffect } from 'react';
// import { motion, useScroll, useTransform } from "framer-motion";
// import { 
//   ChevronRight, Shield, Eye, Users, Layers,
//   Wallet, BarChart2, Lock, Zap, Globe, Code,
//   DollarSign, TrendingUp, Award, MessageCircle
// } from 'lucide-react';

// const LandingPage = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [activeTab, setActiveTab] = useState('features');
//   const { scrollY } = useScroll();
//   const opacity = useTransform(scrollY, [0, 100], [1, 0]);

//   // Animated counter hook
//   const useCounter = (end, duration = 2000) => {
//     const [count, setCount] = useState(0);
//     useEffect(() => {
//       if (isVisible) {
//         let startTime = null;
//         const animate = (currentTime) => {
//           if (!startTime) startTime = currentTime;
//           const progress = Math.min((currentTime - startTime) / duration, 1);
//           setCount(Math.floor(progress * end));
//           if (progress < 1) {
//             requestAnimationFrame(animate);
//           }
//         };
//         requestAnimationFrame(animate);
//       }
//     }, [isVisible, end, duration]);
//     return count;
//   };

//   const tvlCount = useCounter(1200000000);

//   const features = [
//     {
//       title: "Instant Liquidity",
//       description: "Access deep liquidity pools with lightning-fast transactions.",
//       icon: Zap,
//       color: "bg-gradient-to-br from-yellow-400 to-orange-300"
//     },
//     {
//       title: "Cross-Chain Bridge",
//       description: "Seamlessly transfer assets across multiple blockchains.",
//       icon: Globe,
//       color: "bg-gradient-to-br from-blue-400 to-cyan-300"
//     },
//     {
//       title: "Smart Contracts",
//       description: "Audited and secure smart contracts for safe operations.",
//       icon: Code,
//       color: "bg-gradient-to-br from-purple-400 to-pink-300"
//     },
//     {
//       title: "Yield Farming",
//       description: "Maximize returns through automated yield optimization.",
//       icon: DollarSign,
//       color: "bg-gradient-to-br from-green-400 to-emerald-300"
//     },
//     {
//       title: "Analytics Dashboard",
//       description: "Real-time data and insights for informed decisions.",
//       icon: BarChart2,
//       color: "bg-gradient-to-br from-red-400 to-pink-300"
//     },
//     {
//       title: "Governance",
//       description: "Participate in protocol decisions through DAO voting.",
//       icon: Users,
//       color: "bg-gradient-to-br from-indigo-400 to-purple-300"
//     }
//   ];

//   const stats = [
//     { label: "Total Value Locked", value: "$1.2B+" },
//     { label: "Daily Volume", value: "$100M+" },
//     { label: "Active Users", value: "50K+" },
//     { label: "Supported Chains", value: "10+" }
//   ];

//   const roadmap = [
//     {
//       phase: "Q1 2024",
//       items: ["Protocol Launch", "Initial Liquidity Pools", "Security Audits"]
//     },
//     {
//       phase: "Q2 2024",
//       items: ["Cross-chain Integration", "Governance Implementation", "Yield Strategies"]
//     },
//     {
//       phase: "Q3 2024",
//       items: ["Mobile App Launch", "Advanced Analytics", "Partnership Program"]
//     },
//     {
//       phase: "Q4 2024",
//       items: ["Layer 2 Scaling", "NFT Integration", "DAO Evolution"]
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
//       {/* Hero Section */}
//       <div className="relative overflow-hidden">
//         <motion.div 
//           initial="hidden"
//           animate="visible"
//           variants={{
//             hidden: { opacity: 0, y: 20 },
//             visible: { 
//               opacity: 1, 
//               y: 0,
//               transition: { duration: 0.8, staggerChildren: 0.2 }
//             }
//           }}
//           className="max-w-6xl mx-auto px-4 pt-32 pb-20 relative z-10"
//         >
//           <div className="text-center">
//             <motion.h1 
//               className="text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
//               variants={{
//                 hidden: { opacity: 0, y: 20 },
//                 visible: { opacity: 1, y: 0 }
//               }}
//             >
//               The Future of DeFi
//             </motion.h1>
//             <motion.p 
//               className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
//               variants={{
//                 hidden: { opacity: 0, y: 20 },
//                 visible: { opacity: 1, y: 0 }
//               }}
//             >
//               Experience the next generation of decentralized finance with our cutting-edge platform.
//             </motion.p>
//           </div>
//         </motion.div>
//       </div>

//       {/* Stats Section */}
//       <div className="py-16 bg-gradient-to-r from-blue-500 to-purple-500">
//         <div className="max-w-6xl mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//             {stats.map((stat, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 className="text-center text-white"
//               >
//                 <div className="text-3xl font-bold mb-2">{stat.value}</div>
//                 <div className="text-blue-100">{stat.label}</div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Features Grid */}
//       <div className="py-20">
//         <div className="max-w-6xl mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {features.map((feature, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 whileHover={{ scale: 1.05 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 className="bg-white rounded-xl shadow-xl p-6 backdrop-blur-sm border border-gray-100"
//               >
//                 <motion.div
//                   whileHover={{ rotate: 360 }}
//                   transition={{ duration: 0.5 }}
//                   className={`${feature.color} w-16 h-16 rounded-full flex items-center justify-center mb-4`}
//                 >
//                   <feature.icon className="w-8 h-8 text-white" />
//                 </motion.div>
//                 <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
//                 <p className="text-gray-600">{feature.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Roadmap Section */}
//       <div className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
//         <div className="max-w-6xl mx-auto px-4">
//           <motion.h2 
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             className="text-4xl font-bold text-center mb-16"
//           >
//             Roadmap
//           </motion.h2>

//           <div className="relative">
//             <motion.div 
//               initial={{ height: 0 }}
//               whileInView={{ height: '100%' }}
//               viewport={{ once: true }}
//               transition={{ duration: 1.5 }}
//               className="absolute left-1/2 -ml-0.5 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"
//             />

//             {roadmap.map((phase, index) => {
//               const isEven = index % 2 === 0;
//               return (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, x: isEven ? -100 : 100 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.2 }}
//                   className={`relative mb-12 ${
//                     isEven ? 'text-right pr-12 ml-auto' : 'pl-12'
//                   } w-1/2`}
//                 >
//                   <div className="bg-white rounded-lg p-6 shadow-xl border border-gray-100">
//                     <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//                       {phase.phase}
//                     </h3>
//                     <ul className="space-y-3">
//                       {phase.items.map((item, i) => (
//                         <motion.li
//                           key={i}
//                           initial={{ opacity: 0 }}
//                           whileInView={{ opacity: 1 }}
//                           viewport={{ once: true }}
//                           transition={{ delay: (index * 0.2) + (i * 0.1) }}
//                           className="text-gray-600 flex items-center gap-2"
//                         >
//                           <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
//                           {item}
//                         </motion.li>
//                       ))}
//                     </ul>
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>
//       </div>

//       {/* Community Section */}
//       <div className="py-20 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
//         <div className="max-w-6xl mx-auto px-4 text-center">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             className="text-4xl font-bold mb-8"
//           >
//             Join Our Community
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             className="text-xl mb-12"
//           >
//             Be part of the future of decentralized finance
//           </motion.p>
//           <div className="flex flex-wrap justify-center gap-6">
//             {['Discord', 'Twitter', 'Telegram', 'GitHub'].map((platform, index) => (
//               <motion.button
//                 key={platform}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 whileHover={{ scale: 1.1 }}
//                 transition={{ delay: index * 0.1 }}
//                 className="px-8 py-3 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all"
//               >
//                 {platform}
//               </motion.button>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="bg-gray-900 text-white py-16">
//         <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
//           <div>
//             <h3 className="text-2xl font-bold mb-4">DeFi Platform</h3>
//             <p className="text-gray-400">Building the future of finance, one block at a time.</p>
//           </div>
//           <div>
//             <h4 className="font-bold mb-4">Products</h4>
//             <ul className="space-y-2 text-gray-400">
//               <li>Lending</li>
//               <li>Borrowing</li>
//               <li>Staking</li>
//               <li>Yield Farming</li>
//             </ul>
//           </div>
//           <div>
//             <h4 className="font-bold mb-4">Resources</h4>
//             <ul className="space-y-2 text-gray-400">
//               <li>Documentation</li>
//               <li>Whitepaper</li>
//               <li>GitHub</li>
//               <li>Blog</li>
//             </ul>
//           </div>
//           <div>
//             <h4 className="font-bold mb-4">Contact</h4>
//             <ul className="space-y-2 text-gray-400">
//               <li>Support</li>
//               <li>Partnerships</li>
//               <li>Careers</li>
//               <li>Press</li>
//             </ul>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default LandingPage;