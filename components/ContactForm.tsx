import { motion } from "framer-motion";

export function ContactForm() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-md mx-auto"
        >
            <form className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-300">Name</label>
                    <input
                        type="text"
                        className="mt-1 block w-full rounded-md bg-slate-800/50 border-gray-600 text-white"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-300">Email</label>
                    <input
                        type="email"
                        className="mt-1 block w-full rounded-md bg-slate-800/50 border-gray-600 text-white"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-300">Message</label>
                    <textarea
                        rows={4}
                        className="mt-1 block w-full rounded-md bg-slate-800/50 border-gray-600 text-white"
                    />
                </div>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-2 px-4 bg-blue-500 text-white rounded-md"
                >
                    Send Message
                </motion.button>
            </form>
        </motion.div>
    );
}