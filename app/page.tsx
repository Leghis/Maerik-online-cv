// app/page.tsx
"use client";

import {motion, AnimatePresence} from "framer-motion";
import {Button} from "@/components/ui/button";
import {Card} from "@/components/ui/card";
import {Github, Linkedin, Mail, Copy, ExternalLink, ChevronDown} from "lucide-react";
import Image from "next/image";
import {useState} from "react";
import {toast} from "sonner";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

const fadeInUp = {
    initial: {opacity: 0, y: 60},
    animate: {opacity: 1, y: 0},
    transition: {duration: 0.6}
};

export default function Home() {
    const [showContact, setShowContact] = useState(false);
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    const copyToClipboard = (text: string, type: string) => {
        navigator.clipboard.writeText(text);
        toast.success(`${type} copié !`);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
            {/* Hero Section */}
            <motion.section
                className="h-screen flex flex-col items-center justify-center text-center px-4 relative overflow-hidden"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1}}
            >
                {/* Fond animé */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-gray-900/90 z-10"></div>
                    <motion.div
                        className="absolute inset-0 opacity-30"
                        animate={{
                            backgroundPosition: ["0% 0%", "100% 100%"],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                        style={{
                            backgroundImage: "url('/grid-pattern.png')",
                            backgroundSize: "cover"
                        }}
                    />
                </div>

                {/* Photo de profil avec effets */}
                <motion.div
                    className="relative w-40 h-40 mx-auto z-20"
                    whileHover={{scale: 1.05}}
                >
                    <Image
                        src="/your-profile-image.jpg"
                        alt="Ghislain Maerik"
                        fill
                        className="rounded-full object-cover border-4 border-blue-500 z-10 relative"
                    />
                    {/* Particules interactives */}
                    {Array.from({length: 8}).map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-2 h-2 bg-blue-500 rounded-full"
                            style={{
                                top: `${50 + 30 * Math.cos(2 * Math.PI * i / 8)}%`,
                                left: `${50 + 30 * Math.sin(2 * Math.PI * i / 8)}%`,
                            }}
                            animate={{
                                scale: [1, 1.5, 1],
                                opacity: [0.5, 1, 0.5],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: i * 0.2,
                            }}
                        />
                    ))}
                    <motion.div
                        className="absolute inset-0 rounded-full border-2 border-blue-500/50"
                        animate={{
                            rotate: 360,
                            scale: [1, 1.1, 1],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />
                </motion.div>

                <motion.h1
                    className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mt-8 z-20"
                    {...fadeInUp}
                >
                    Ghislain Maerik
                    <br/>
                    <span className="text-4xl">TSITSOL AYINA</span>
                </motion.h1>

                <motion.p
                    className="text-xl text-gray-300 mb-8 max-w-2xl z-20"
                    {...fadeInUp}
                >
                    Versatile Solutions Architect | Web & Mobile Developer | Tech Enthusiast
                </motion.p>

                {/* Boutons de contact améliorés */}
                <motion.div
                    className="flex flex-wrap justify-center gap-4 z-20"
                    variants={fadeInUp}
                >
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button
                                    variant="outline"
                                    onClick={() => window.open('https://github.com/Leghis', '_blank')}
                                    className="bg-gray-800/50 hover:bg-gray-700/50 border-blue-500/50 hover:border-blue-400 transform hover:scale-105 transition-all duration-300"
                                >
                                    <Github className="mr-2"/> GitHub
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Voir mes projets sur GitHub</p>
                            </TooltipContent>
                        </Tooltip>

                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button
                                    variant="outline"
                                    onClick={() => window.open('https://www.linkedin.com/in/ayinamaerik/', '_blank')}
                                    className="bg-gray-800/50 hover:bg-gray-700/50 border-blue-500/50 hover:border-blue-400 transform hover:scale-105 transition-all duration-300"
                                >
                                    <Linkedin className="mr-2"/> LinkedIn
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Connectons-nous sur LinkedIn</p>
                            </TooltipContent>
                        </Tooltip>

                        <motion.div className="relative">
                            <Button
                                variant="outline"
                                onClick={() => setShowContact(!showContact)}
                                className="bg-gray-800/50 hover:bg-gray-700/50 border-blue-500/50 hover:border-blue-400 transform hover:scale-105 transition-all duration-300"
                            >
                                <Mail className="mr-2"/> Contact Me
                            </Button>
                            <AnimatePresence>
                                {showContact && (
                                    <motion.div
                                        initial={{opacity: 0, y: 10}}
                                        animate={{opacity: 1, y: 0}}
                                        exit={{opacity: 0, y: 10}}
                                        className="absolute top-full mt-2 p-4 bg-gray-800 rounded-lg border border-gray-700 w-72 z-50"
                                    >
                                        <div className="space-y-3">
                                            <div
                                                className="flex items-center justify-between p-2 bg-gray-700/50 rounded hover:bg-gray-600/50 transition-colors">
                                                <span className="text-sm">ayinamaerik@gmail.com</span>
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    onClick={() => copyToClipboard('ayinamaerik@gmail.com', 'Email')}
                                                    className="hover:bg-gray-500/30"
                                                >
                                                    <Copy className="w-4 h-4"/>
                                                </Button>
                                            </div>
                                            <div
                                                className="flex items-center justify-between p-2 bg-gray-700/50 rounded hover:bg-gray-600/50 transition-colors">
                                                <span className="text-sm">+1(613)355-7308</span>
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    onClick={() => copyToClipboard('+1234567890', 'Numéro')}
                                                    className="hover:bg-gray-500/30"
                                                >
                                                    <Copy className="w-4 h-4"/>
                                                </Button>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    </TooltipProvider>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
                    animate={{
                        y: [0, 10, 0],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                    }}
                >
                    <ChevronDown className="w-8 h-8 text-blue-400"/>
                </motion.div>
            </motion.section>

            {/* Experience Section avec Timeline */}
            <motion.section
                className="py-20 px-4 relative"
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                viewport={{once: true}}
            >
                <div
                    className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 opacity-50"></div>

                <div className="max-w-6xl mx-auto relative z-10">
                    <motion.h2
                        className="text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
                        initial={{y: 50, opacity: 0}}
                        whileInView={{y: 0, opacity: 1}}
                        viewport={{once: true}}
                    >
                        Professional Journey
                    </motion.h2>

                    <div className="relative space-y-8">
                        {/* Ligne verticale de timeline */}
                        <div
                            className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500"></div>

                        {[
                            {
                                title: "Software Developer",
                                company: "Prosomo Inc.",
                                period: "May 2022 - Sep 2024",
                                location: "Ottawa, Ontario, Canada",
                                type: "Remote",
                                description: "Led development of scalable web applications using modern technologies and cloud infrastructure.",
                                skills: ["React", "Node.js", "AWS", "TypeScript", "Cloud Architecture"]
                            },
                            {
                                title: "Cloud Engineer",
                                company: "NEXAH",
                                period: "Jun 2021 - May 2022",
                                description: "Architected and maintained cloud infrastructure, implementing CI/CD pipelines and monitoring solutions.",
                                skills: ["React.js", "AWS", "Kubernetes", "Azure", "DevOps"]
                            },
                            {
                                title: "Cloud Support Engineer",
                                company: "Afrikpay",
                                period: "Jul 2020 - Jun 2021",
                                description: "Provided technical support for cloud-based solutions and implemented security best practices.",
                                skills: ["AWS", "Security", "DevOps", "Cloud Architecture"]
                            },
                            {
                                title: "DevOps Developer",
                                company: "Clever Electric Tech",
                                period: "Sep 2018 - Jul 2020",
                                description: "Managed cloud infrastructure and implemented automated deployment pipelines.",
                                skills: ["GitHub", "JavaScript", "ASP.NET MVC", "MySQL", "C#", "LINQ"]
                            }
                        ].map((exp, index) => (
                            <motion.div
                                key={index}
                                className={`relative flex items-center ${
                                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                } gap-8`}
                                initial={{x: index % 2 === 0 ? -100 : 100, opacity: 0}}
                                whileInView={{x: 0, opacity: 1}}
                                viewport={{once: true}}
                                transition={{duration: 0.5, delay: index * 0.2}}
                                onMouseEnter={() => setHoveredCard(index)}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                {/* Point sur la timeline */}
                                <div
                                    className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-900 z-20"></div>

                                <Card
                                    className="w-full md:w-[calc(50%-2rem)] p-6 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 relative overflow-hidden">
                                    {/* Effet de bordure animée */}
                                    {hoveredCard === index && (
                                        <motion.div
                                            className="absolute inset-0 pointer-events-none"
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                ease: "linear",
                                            }}
                                            style={{opacity: 0.2}}
                                        />
                                    )}
                                    <motion.div
                                        initial={{opacity: 0}}
                                        whileInView={{opacity: 1}}
                                        transition={{delay: 0.3}}
                                    >
                                        <h3 className="text-xl font-bold text-blue-400 mb-2">{exp.title}</h3>
                                        <p className="text-lg text-gray-300 mb-1">{exp.company}</p>
                                        <p className="text-sm text-gray-400 mb-3">{exp.period}</p>
                                        {exp.location && (
                                            <p className="text-sm text-gray-400 mb-3">
                                                📍 {exp.location} • {exp.type}
                                            </p>
                                        )}
                                        <p className="text-gray-300 mb-4">{exp.description}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {exp.skills.map((skill, i) => (
                                                <span
                                                    key={i}
                                                    className="px-3 py-1 bg-blue-900/30 border border-blue-500/30 rounded-full text-sm text-blue-300 hover:bg-blue-900/50 transition-colors duration-300"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* Projects Section avec Grid Interactive */}
            <motion.section
                className="py-20 px-4 bg-gray-900 relative overflow-hidden"
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                viewport={{once: true}}
            >
                {/* Fond décoratif */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20 z-0"></div>
                    <motion.div
                        className="absolute inset-0 opacity-10"
                        animate={{
                            backgroundPosition: ["0% 0%", "100% 100%"],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                        style={{
                            backgroundImage: "url('/grid-pattern.png')",
                            backgroundSize: "cover"
                        }}
                    />
                </div>

                <div className="max-w-6xl mx-auto relative z-10">
                    <motion.h2
                        className="text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
                        initial={{y: 50, opacity: 0}}
                        whileInView={{y: 0, opacity: 1}}
                        viewport={{once: true}}
                    >
                        Featured Projects
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Carbon Footprint Calculator",
                                description: "Interactive calculator for assessing environmental impact through transportation, energy, and lifestyle metrics.",
                                link: "https://carbone-one.vercel.app/",
                                image: "/carbon-calc.jpg",
                                tags: ["Next.js", "TypeScript", "TailwindCSS"]
                            },
                            {
                                title: "FlashCards",
                                description: "Modern web application for language learning using flashcards, featuring spaced repetition system and progress tracking.",
                                link: "https://flashcards-mu-nine.vercel.app/",
                                image: "/flashcards.jpg",
                                tags: ["React", "Node.js", "MongoDB"]
                            },
                            {
                                title: "Hairstyle Calculator",
                                description: "Professional tool for hairdressers to calculate service costs, considering style type, duration, and additional services.",
                                link: "https://hairstyle-calculator.vercel.app/",
                                image: "/hairstyle.jpg",
                                tags: ["Next.js", "TypeScript", "Tailwind"]
                            },
                            {
                                title: "Sorting Visualizer",
                                description: "Dynamic visualization of sorting algorithms in real-time, built with modern web technologies.",
                                link: "https://sorting-visualizer-inky-nine.vercel.app/",
                                image: "/sorting.jpg",
                                tags: ["Next.js", "Framer Motion", "TypeScript"]
                            }
                        ].map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{y: 50, opacity: 0}}
                                whileInView={{y: 0, opacity: 1}}
                                viewport={{once: true}}
                                transition={{delay: index * 0.2}}
                                whileHover={{scale: 1.02}}
                                className="group cursor-pointer"
                                onClick={() => window.open(project.link, '_blank')}
                            >
                                <Card
                                    className="overflow-hidden bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
                                    <div className="relative h-64">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div
                                            className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <div className="absolute bottom-4 left-4 right-4">
                                                <motion.div
                                                    initial={{y: 20, opacity: 0}}
                                                    whileHover={{y: 0, opacity: 1}}
                                                    transition={{duration: 0.3}}
                                                >
                                                    <Button
                                                        variant="outline"
                                                        className="w-full bg-gray-900/80 border-blue-500/50 hover:bg-blue-500/20"
                                                    >
                                                        View Project <ExternalLink className="ml-2 w-4 h-4"/>
                                                    </Button>
                                                </motion.div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold mb-2 text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-300 mb-4">{project.description}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map((tag, i) => (
                                                <span
                                                    key={i}
                                                    className="px-2 py-1 text-xs bg-blue-900/30 border border-blue-500/30 rounded-full text-blue-300"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>
            {/* Education Section avec effet 3D */}
            <motion.section
                className="py-20 px-4 relative"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                {/* Fond décoratif avec particules */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 opacity-90"></div>
                    {Array.from({ length: 20 }).map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-2 h-2 bg-blue-500 rounded-full"
                            style={{
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                y: [0, -20, 0],
                                opacity: [0.2, 1, 0.2],
                                scale: [1, 1.2, 1],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                delay: Math.random() * 2,
                            }}
                        />
                    ))}
                </div>

                <div className="max-w-6xl mx-auto relative z-10">
                    <motion.h2
                        className="text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        Educational Background
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                school: "Conestoga College",
                                degree: "Art, études d'art, général",
                                period: "Sep 2024 - Aug 2025",
                                icon: "🎓",
                                color: "from-blue-400 to-purple-500"
                            },
                            {
                                school: "3iL Ingénieurs",
                                degree: "Bachelor of Technology, Conception des Systèmes d'informations",
                                period: "Oct 2020 - Sep 2021",
                                icon: "🎯",
                                color: "from-purple-400 to-pink-500"
                            },
                            {
                                school: "CCNB",
                                degree: "DEC, Programmation et application Mobile",
                                period: "Sep 2018 - Sep 2020",
                                icon: "💻",
                                color: "from-pink-400 to-red-500"
                            }
                        ].map((edu, index) => (
                            <motion.div
                                key={index}
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                whileHover={{
                                    scale: 1.05,
                                    rotateY: 5,
                                    transition: { duration: 0.3 }
                                }}
                                className="perspective-1000"
                            >
                                <Card className="p-6 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 h-full relative overflow-hidden">
                                    {/* Effet de gradient animé */}
                                    <motion.div
                                        className={`absolute inset-0 opacity-10 bg-gradient-to-r ${edu.color}`}
                                        animate={{
                                            scale: [1, 1.2, 1],
                                            opacity: [0.1, 0.2, 0.1],
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "linear"
                                        }}
                                    />

                                    <div className="relative z-10">
                                        <div className="text-4xl mb-4">{edu.icon}</div>
                                        <h3 className="text-xl font-bold text-blue-400 mb-2">{edu.school}</h3>
                                        <p className="text-gray-300 mb-2">{edu.degree}</p>
                                        <p className="text-sm text-gray-400">{edu.period}</p>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* Skills & Certifications avec effet de progression dynamique */}
            <motion.section
                className="py-20 px-4 bg-gray-900 relative overflow-hidden"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                {/* Effet de grille en arrière-plan */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20 z-0"></div>
                    <motion.div
                        className="absolute inset-0 opacity-10"
                        animate={{
                            backgroundPosition: ["0% 0%", "100% 100%"],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                        style={{
                            backgroundImage: "url('/grid-pattern.png')",
                            backgroundSize: "cover"
                        }}
                    />
                </div>

                <div className="max-w-6xl mx-auto relative z-10">
                    <motion.h2
                        className="text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        Skills & Expertise
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Technical Skills */}
                        <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="p-6 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
                                <h3 className="text-xl font-bold mb-6 text-blue-400">Technical Skills</h3>
                                <div className="space-y-4">
                                    {[
                                        { skill: "Cloud Architecture", level: 80 },
                                        { skill: "React/Next.js", level: 70 },
                                        { skill: "AWS", level: 90 },
                                        { skill: "Azure", level: 40 },
                                        { skill: "TypeScript", level: 70 },
                                        { skill: "Node.js", level: 70 },
                                        { skill: "DevOps", level: 95 }
                                    ].map((skill, index) => (
                                        <div key={index} className="space-y-2">
                                            <div className="flex justify-between">
                                                <span className="text-gray-300">{skill.skill}</span>
                                                <span className="text-gray-400">{skill.level}%</span>
                                            </div>
                                            <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                                                <motion.div
                                                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${skill.level}%` }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 1, delay: index * 0.1 }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Card>
                        </motion.div>
                        {/* Languages & Certifications */}
                        <motion.div
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <Card className="p-6 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
                                <h3 className="text-xl font-bold mb-6 text-blue-400">Languages & Certifications</h3>

                                {/* Languages */}
                                <div className="mb-8">
                                    <h4 className="text-lg font-semibold mb-4 text-gray-300">Languages</h4>
                                    <div className="space-y-6">
                                        {[
                                            {
                                                language: "Français",
                                                level: "Native",
                                                progress: 100,
                                                icon: "🇫🇷"
                                            },
                                            {
                                                language: "English",
                                                level: "Professional",
                                                progress: 40,
                                                icon: "🇬🇧"
                                            }
                                        ].map((lang, index) => (
                                            <div key={index} className="space-y-2">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-2">
                                                        <span className="text-xl">{lang.icon}</span>
                                                        <span className="text-gray-300">{lang.language}</span>
                                                    </div>
                                                    <span className="text-gray-400">{lang.level}</span>
                                                </div>
                                                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                                                    <motion.div
                                                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                                                        initial={{ width: 0 }}
                                                        whileInView={{ width: `${lang.progress}%` }}
                                                        viewport={{ once: true }}
                                                        transition={{ duration: 1 }}
                                                        animate={{
                                                            width: [`${lang.progress - 5}%`, `${lang.progress}%`],
                                                            opacity: [0.7, 1],
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Certifications */}
                                <div>
                                    <h4 className="text-lg font-semibold mb-4 text-gray-300">Certifications</h4>
                                    <motion.div
                                        className="relative p-4 bg-blue-900/20 rounded-lg border border-blue-500/30"
                                        whileHover={{ scale: 1.02 }}
                                    >
                                        <div className="absolute inset-0">
                                            <motion.div
                                                className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20"
                                                animate={{
                                                    opacity: [0.3, 0.5, 0.3],
                                                }}
                                                transition={{
                                                    duration: 2,
                                                    repeat: Infinity,
                                                    ease: "linear",
                                                }}
                                            />
                                        </div>
                                        <div className="relative z-10">
                                            <div className="flex items-center gap-3">
                                                <span className="text-2xl">🏆</span>
                                                <div>
                                                    <p className="text-blue-400 font-medium">AWS Certification</p>
                                                    <p className="text-gray-400 text-sm">In Progress - Expected Nov 2024</p>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Footer amélioré */}
            <footer className="py-12 px-4 bg-gray-900 border-t border-gray-800 relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-black/80"></div>
                    <motion.div
                        className="absolute inset-0 opacity-30"
                        animate={{
                            backgroundPosition: ["0% 0%", "100% 100%"],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                        style={{
                            backgroundImage: "url('/grid-pattern.png')",
                            backgroundSize: "cover"
                        }}
                    />
                </div>

                <div className="max-w-6xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        <h3 className="text-2xl font-bold text-blue-400 mb-4">Let&#39;s Connect!</h3>
                        <div className="flex justify-center gap-4 mb-8">
                            <motion.a
                                href="https://github.com/Leghis"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1 }}
                                className="p-3 bg-gray-800/50 rounded-full hover:bg-gray-700/50 transition-colors"
                            >
                                <Github className="w-6 h-6" />
                            </motion.a>
                            <motion.a
                                href="https://www.linkedin.com/in/ayinamaerik/"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1 }}
                                className="p-3 bg-gray-800/50 rounded-full hover:bg-gray-700/50 transition-colors"
                            >
                                <Linkedin className="w-6 h-6" />
                            </motion.a>
                            <motion.button
                                onClick={() => setShowContact(!showContact)}
                                whileHover={{ scale: 1.1 }}
                                className="p-3 bg-gray-800/50 rounded-full hover:bg-gray-700/50 transition-colors"
                            >
                                <Mail className="w-6 h-6" />
                            </motion.button>
                        </div>
                        <p className="text-gray-400">© 2024 Ghislain Maerik TSITSOL AYINA</p>
                    </motion.div>
                </div>
            </footer>
        </div>
    );
}