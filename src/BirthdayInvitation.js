import { useEffect } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import './App.css';
import { Link } from 'react-router-dom';

export default function BirthdayInvitation() {
useEffect(() => {
const duration = 5 * 1000;
const animationEnd = Date.now() + duration;
const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
const interval = setInterval(() => {
const timeLeft = animationEnd - Date.now();
if (timeLeft <= 0) {
return clearInterval(interval);
}
const particleCount = 50 * (timeLeft / duration);
confetti(
Object.assign({}, defaults, {
particleCount,
origin: {
x: Math.random(),
y: Math.random() - 0.2,
},
})
);
}, 250);
}, []);


return (
<div className="min-h-screen bg-gradient-to-br from-pink-300 to-white-100 flex items-center justify-center p-4 overflow-hidden">
<motion.div
initial={{ opacity: 0, y: 50 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 1 }}
className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center"
>
<motion.h1
initial={{ scale: 0.8 }}
animate={{ scale: 1 }}
transition={{ duration: 0.5, delay: 0.5 }}
className="text-3xl font-bold text-pink-600 mb-4"
>
¡FELIZ CUMPLEAÑOS ANDREITA!
</motion.h1>
<p className="text-gray-700 mb-3">🎉 Un año más vieja 🎈</p>
<motion.div
initial={{ opacity: 0, scale: 0.9 }}
animate={{ opacity: 1, scale: 1 }}
transition={{ delay: 1 }}
>

<Link
  to="/confirmacion" // Esta es la ruta a la que te dirigirá el botón
  className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-full mt-6 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
>
¡CLICK!
</Link>
</motion.div>
</motion.div>
</div>

);
}