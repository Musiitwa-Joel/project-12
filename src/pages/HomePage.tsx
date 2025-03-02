import type React from "react";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Users,
  Calendar,
  TrendingUp,
  BookOpen,
  Shield,
  Zap,
  Globe,
} from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useAnimation,
} from "framer-motion";
import Hero from "../components/Hero";
import HakimPic from "../../public/assets/img/hakim.jpeg";

interface HomePageProps {
  theme: string;
}

const HomePage: React.FC<HomePageProps> = ({ theme }) => {
  const features = [
    {
      icon: (
        <Users
          className={`h-8 w-8 ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        />
      ),
      title: "Smart Admissions",
      description:
        "Streamline your enrollment process with AI-powered automation that intelligently processes applications and identifies qualified candidates.",
    },
    {
      icon: (
        <BookOpen
          className={`h-8 w-8 ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        />
      ),
      title: "Advanced Registration",
      description:
        "Intelligent course scheduling with smart conflict resolution, automated prerequisite verification, and dynamic class capacity management.",
    },
    {
      icon: (
        <TrendingUp
          className={`h-8 w-8 ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        />
      ),
      title: "Performance Analytics",
      description:
        "Track progress with comprehensive analytics, predictive performance modeling, early intervention alerts, and customizable reporting dashboards.",
    },
    {
      icon: (
        <Calendar
          className={`h-8 w-8 ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        />
      ),
      title: "Smart Finance",
      description:
        "Automated billing and financial reporting in real-time, with integrated payment processing, scholarship management, and financial aid tracking.",
    },
  ];

  const testimonials = [
    {
      quote:
        "Tredumo has completely transformed how we manage our educational processes. The intuitive interface and powerful analytics have made a significant impact on our efficiency.",
      author: "Jude Lubega",
      position: "Vice Chancellor, Nkumba University",
      image:
        "https://unffeict4farmers.org/wp-content/uploads/2020/07/Prof.-Jude-Lubega-ceo-8tech-consults-1.jpg",
    },
    {
      quote:
        "The AI-driven insights have helped us identify areas for improvement that we never would have noticed otherwise. Our student satisfaction rates have increased by 35% since implementing Tredumo.",
      author: "Hakim Mulinde",
      position: "CTO, Nkumba University",
      image: HakimPic,
    },
    {
      quote:
        "The seamless integration with our existing systems made the transition to Tredumo incredibly smooth. Their support team was exceptional throughout the entire process.",
      author: "Ntabadde Vanessah",
      position: "CEO of Charmant Clothing Line",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80",
    },
  ];

  const stats = [
    { value: "500+", label: "Institutions" },
    { value: "3.5M+", label: "Students" },
    { value: "98%", label: "Satisfaction" },
    { value: "24/7", label: "Support" },
  ];

  // Scroll progress for parallax effects
  const { scrollYProgress } = useScroll();
  const dashboardRef = useRef<HTMLDivElement>(null);
  const dashboardInView = useInView(dashboardRef, { once: false, amount: 0.3 });
  const dashboardControls = useAnimation();

  // Parallax effect for background elements
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 300]);

  useEffect(() => {
    if (dashboardInView) {
      dashboardControls.start("visible");
    }
  }, [dashboardInView, dashboardControls]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.5,
      },
    },
  };

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6,
      },
    },
  };

  const staggerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardHoverVariants = {
    hover: {
      y: -10,
      boxShadow:
        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 17,
      },
    },
  };

  return (
    <div
      className={`${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* Hero Section */}
      <Hero theme={theme} />

      {/* Stats Section */}
      <section
        className={`py-20 px-4 sm:px-6 lg:px-8 ${
          theme === "dark" ? "bg-black" : "bg-white"
        } relative overflow-hidden`}
      >
        {/* Animated background elements */}
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 blur-3xl"
          style={{ y: backgroundY }}
        />

        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <motion.p
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                    transition: {
                      type: "spring",
                      stiffness: 200,
                      delay: index * 0.1,
                    },
                  }}
                  viewport={{ once: true }}
                  className={`text-4xl md:text-5xl font-bold ${
                    theme === "dark"
                      ? "text-tredumo-blue-400"
                      : "text-tredumo-blue-600"
                  } mb-2`}
                >
                  {stat.value}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{
                    opacity: 1,
                    transition: { delay: 0.3 + index * 0.1 },
                  }}
                  viewport={{ once: true }}
                  className={`${
                    theme === "dark" ? "text-white/70" : "text-black/70"
                  } text-sm uppercase tracking-wider`}
                >
                  {stat.label}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section
        className={`py-32 px-4 sm:px-6 lg:px-8 ${
          theme === "dark" ? "bg-black" : "bg-white"
        } relative overflow-hidden`}
      >
        {/* Animated background elements */}
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 blur-3xl"
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, -100]) }}
        />

        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUpVariants}
            className="text-center mb-24"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.1 },
              }}
              viewport={{ once: true }}
              className={`text-sm font-medium tracking-widest ${
                theme === "dark"
                  ? "text-tredumo-blue-400"
                  : "text-tredumo-blue-600"
              } uppercase`}
            >
              Features
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.2 },
              }}
              viewport={{ once: true }}
              className={`text-4xl md:text-5xl font-bold ${
                theme === "dark" ? "text-white" : "text-black"
              } mt-4 tracking-tight`}
            >
              Powerful features.
              <br />
              <span
                className={`${
                  theme === "dark"
                    ? "text-tredumo-blue-400"
                    : "text-tredumo-blue-600"
                }`}
              >
                Designed for education.
              </span>
            </motion.h2>
          </motion.div>

          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={cardHoverVariants}
                whileHover="hover"
                className={`feature-card group ${
                  theme === "dark"
                    ? "bg-white/5 hover:bg-white/10 border-white/5 hover:border-white/10"
                    : "bg-black/5 hover:bg-black/10 border-black/5 hover:border-black/10"
                } rounded-2xl p-8 border transition-all duration-300`}
              >
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                    transition: { type: "spring", stiffness: 400 },
                  }}
                  className={`mb-6 p-3 rounded-xl inline-block ${
                    theme === "dark" ? "bg-white/10" : "bg-black/10"
                  }`}
                >
                  {feature.icon}
                </motion.div>
                <h3
                  className={`text-2xl font-semibold ${
                    theme === "dark" ? "text-white" : "text-black"
                  } mb-4`}
                >
                  {feature.title}
                </h3>
                <p
                  className={`${
                    theme === "dark" ? "text-white/70" : "text-black/70"
                  } text-lg leading-relaxed`}
                >
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <Link
              to="/features"
              className={`inline-block ${
                theme === "dark"
                  ? "bg-white/10 text-white hover:bg-white/20"
                  : "bg-black/10 text-black hover:bg-black/20"
              } backdrop-blur-xl px-8 py-4 rounded-full transition-all duration-300 font-medium text-sm tracking-wide group relative overflow-hidden`}
            >
              <span className="relative z-10">View all features</span>
              <motion.span
                className={`absolute inset-0 ${
                  theme === "dark" ? "bg-white/10" : "bg-black/10"
                } transform origin-left`}
                initial={{ scaleX: 0 }}
                whileHover={{
                  scaleX: 1,
                  transition: { duration: 0.3 },
                }}
              />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Dashboard Section */}
      <section
        ref={dashboardRef}
        className={`py-32 px-4 sm:px-6 lg:px-8 ${
          theme === "dark" ? "bg-black" : "bg-white"
        } relative overflow-hidden`}
      >
        {/* Animated background gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-cyan-500/5"
          initial={{ opacity: 0 }}
          animate={{
            opacity: dashboardInView ? 1 : 0,
            transition: { duration: 1.5 },
          }}
        />

        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial="hidden"
            animate={dashboardControls}
            variants={fadeInUpVariants}
            className="text-center mb-24"
          >
            <span
              className={`text-sm font-medium tracking-widest ${
                theme === "dark"
                  ? "text-tredumo-blue-400"
                  : "text-tredumo-blue-600"
              } uppercase`}
            >
              Dashboard
            </span>
            <h2
              className={`text-4xl md:text-5xl font-bold ${
                theme === "dark" ? "text-white" : "text-black"
              } mt-4 tracking-tight`}
            >
              Beautiful analytics.
              <br />
              <span
                className={`${
                  theme === "dark"
                    ? "text-tredumo-blue-400"
                    : "text-tredumo-blue-600"
                }`}
              >
                At your fingertips.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={dashboardControls}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  type: "spring",
                  stiffness: 50,
                  damping: 20,
                  duration: 0.8,
                },
              },
            }}
            className="relative"
          >
            <div className="absolute -inset-x-20 -inset-y-20 bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-cyan-500/30 blur-3xl opacity-20 rounded-[3rem]"></div>

            <div
              className={`relative ${
                theme === "dark"
                  ? "bg-white/5 border-white/10"
                  : "bg-black/5 border-black/10"
              } backdrop-blur-xl rounded-[2rem] border p-8 overflow-hidden`}
            >
              <motion.div
                variants={staggerContainerVariants}
                initial="hidden"
                animate={dashboardControls}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {[
                  {
                    title: "Students",
                    value: "1,234",
                    trend: "+12% this month",
                    icon: (
                      <Users
                        className={`h-5 w-5 ${
                          theme === "dark" ? "text-white/60" : "text-black/60"
                        }`}
                      />
                    ),
                    trendIcon: <TrendingUp className="h-4 w-4 mr-1" />,
                  },
                  {
                    title: "Courses",
                    value: "86",
                    trend: "Active sessions",
                    icon: (
                      <BookOpen
                        className={`h-5 w-5 ${
                          theme === "dark" ? "text-white/60" : "text-black/60"
                        }`}
                      />
                    ),
                  },
                  {
                    title: "Revenue",
                    value: "284.5k",
                    trend: "+8% this month",
                    icon: (
                      <span
                        className={`text-2xl ${
                          theme === "dark" ? "text-white/60" : "text-black/60"
                        }`}
                      >
                        $
                      </span>
                    ),
                    trendIcon: <TrendingUp className="h-4 w-4 mr-1" />,
                  },
                  {
                    title: "Events",
                    value: "12",
                    trend: "Next 7 days",
                    icon: (
                      <Calendar
                        className={`h-5 w-5 ${
                          theme === "dark" ? "text-white/60" : "text-black/60"
                        }`}
                      />
                    ),
                  },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.03,
                      transition: { type: "spring", stiffness: 400 },
                    }}
                    className={`stats-card ${
                      theme === "dark"
                        ? "bg-white/5 border-white/5 hover:border-white/10"
                        : "bg-black/5 border-black/5 hover:border-black/10"
                    } rounded-xl p-4 border transition-all duration-300`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3
                        className={`${
                          theme === "dark" ? "text-white/80" : "text-black/80"
                        } font-medium`}
                      >
                        {stat.title}
                      </h3>
                      {stat.icon}
                    </div>
                    <motion.p
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        transition: {
                          delay: 0.3 + index * 0.1,
                          type: "spring",
                          stiffness: 100,
                        },
                      }}
                      className={`text-3xl font-semibold ${
                        theme === "dark" ? "text-white" : "text-black"
                      } mb-2`}
                    >
                      {stat.value}
                    </motion.p>
                    <p
                      className={`${
                        theme === "dark" ? "text-white/60" : "text-black/60"
                      } text-sm flex items-center`}
                    >
                      {stat.trendIcon && stat.trendIcon}
                      {stat.trend}
                    </p>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                className="mt-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{
                  opacity: dashboardInView ? 1 : 0,
                  y: dashboardInView ? 0 : 30,
                  transition: {
                    delay: 0.6,
                    duration: 0.8,
                    type: "spring",
                    stiffness: 50,
                  },
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
                  alt="Analytics Dashboard"
                  className="rounded-2xl w-full shadow-xl"
                  loading="lazy"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section
        className={`py-32 px-4 sm:px-6 lg:px-8 ${
          theme === "dark" ? "bg-black" : "bg-white"
        } relative overflow-hidden`}
      >
        {/* Animated background elements */}
        <motion.div
          className="absolute top-40 right-0 w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl"
          style={{ x: useTransform(scrollYProgress, [0, 1], [100, -100]) }}
        />

        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span
              className={`text-sm font-medium tracking-widest ${
                theme === "dark"
                  ? "text-tredumo-blue-400"
                  : "text-tredumo-blue-600"
              } uppercase`}
            >
              Why Choose Us
            </span>
            <h2
              className={`text-4xl md:text-5xl font-bold ${
                theme === "dark" ? "text-white" : "text-black"
              } mt-4 tracking-tight`}
            >
              Built for modern education
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: (
                  <Shield
                    className={`h-8 w-8 ${
                      theme === "dark"
                        ? "text-tredumo-blue-400"
                        : "text-tredumo-blue-600"
                    }`}
                  />
                ),
                title: "Enterprise Security",
                description:
                  "Bank-level encryption, role-based access controls, and comprehensive audit logs to keep your data safe.",
              },
              {
                icon: (
                  <Zap
                    className={`h-8 w-8 ${
                      theme === "dark"
                        ? "text-tredumo-blue-400"
                        : "text-tredumo-blue-600"
                    }`}
                  />
                ),
                title: "Lightning Fast",
                description:
                  "Optimized for speed with distributed cloud infrastructure and intelligent caching for seamless performance.",
              },
              {
                icon: (
                  <Globe
                    className={`h-8 w-8 ${
                      theme === "dark"
                        ? "text-tredumo-blue-400"
                        : "text-tredumo-blue-600"
                    }`}
                  />
                ),
                title: "Global Compliance",
                description:
                  "Built to meet educational standards and privacy regulations worldwide, including FERPA, GDPR, and more.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  transition: { type: "spring", stiffness: 300 },
                }}
                className={`p-8 rounded-3xl ${
                  theme === "dark"
                    ? "bg-white/5 border-white/5"
                    : "bg-black/5 border-black/5"
                } backdrop-blur-xl border text-center transition-all duration-300`}
              >
                <motion.div
                  className="flex justify-center mb-6"
                  whileHover={{
                    rotate: [0, -10, 10, -10, 0],
                    transition: { duration: 0.5 },
                  }}
                >
                  {item.icon}
                </motion.div>
                <h3
                  className={`text-xl font-semibold ${
                    theme === "dark" ? "text-white" : "text-black"
                  } mb-4`}
                >
                  {item.title}
                </h3>
                <p
                  className={`${
                    theme === "dark" ? "text-white/70" : "text-black/70"
                  }`}
                >
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        className={`py-32 px-4 sm:px-6 lg:px-8 ${
          theme === "dark" ? "bg-black" : "bg-white"
        } relative overflow-hidden`}
      >
        {/* Animated background elements */}
        <motion.div
          className="absolute bottom-40 left-0 w-96 h-96 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 blur-3xl"
          style={{ x: useTransform(scrollYProgress, [0, 1], [-100, 100]) }}
        />

        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <span
              className={`text-sm font-medium tracking-widest ${
                theme === "dark"
                  ? "text-tredumo-blue-400"
                  : "text-tredumo-blue-600"
              } uppercase`}
            >
              Testimonials
            </span>
            <h2
              className={`text-4xl md:text-5xl font-bold ${
                theme === "dark" ? "text-white" : "text-black"
              } mt-4 tracking-tight`}
            >
              Trusted by leading
              <br />
              institutions worldwide
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  transition: { type: "spring", stiffness: 300 },
                }}
                className={`p-8 rounded-3xl ${
                  theme === "dark"
                    ? "bg-white/5 border-white/5"
                    : "bg-black/5 border-black/5"
                } backdrop-blur-xl border relative transition-all duration-300`}
              >
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{
                    scale: 1.2,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                  className={`absolute -top-5 -left-5 w-10 h-10 flex items-center justify-center rounded-full ${
                    theme === "dark"
                      ? "bg-tredumo-blue-500 text-white"
                      : "bg-tredumo-blue-600 text-white"
                  } text-2xl font-serif`}
                >
                  "
                </motion.div>
                <p
                  className={`${
                    theme === "dark" ? "text-white/80" : "text-black/80"
                  } text-lg mb-6 italic`}
                >
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <motion.img
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                      transition: { delay: 0.2 + index * 0.1 },
                    }}
                    viewport={{ once: true }}
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4
                      className={`font-medium ${
                        theme === "dark" ? "text-white" : "text-black"
                      }`}
                    >
                      {testimonial.author}
                    </h4>
                    <p
                      className={`text-sm ${
                        theme === "dark" ? "text-white/60" : "text-black/60"
                      }`}
                    >
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className={`py-32 px-4 sm:px-6 lg:px-8 ${
          theme === "dark" ? "bg-black" : "bg-white"
        } relative overflow-hidden`}
      >
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={`rounded-[2rem] ${
              theme === "dark"
                ? "bg-white/5 border-white/10"
                : "bg-black/5 border-black/10"
            } backdrop-blur-xl border p-12 md:p-16 text-center relative overflow-hidden`}
          >
            <motion.div
              className="absolute -inset-x-20 -inset-y-20 bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-cyan-500/30 blur-3xl opacity-20 rounded-[3rem]"
              animate={{
                opacity: [0.1, 0.3, 0.1],
                transition: {
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 5,
                  ease: "easeInOut",
                },
              }}
            />

            <div className="relative">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.1 },
                }}
                viewport={{ once: true }}
                className={`text-sm font-medium tracking-widest ${
                  theme === "dark"
                    ? "text-tredumo-blue-400"
                    : "text-tredumo-blue-600"
                } uppercase`}
              >
                Ready to transform your institution?
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.2 },
                }}
                viewport={{ once: true }}
                className={`text-4xl md:text-5xl font-bold ${
                  theme === "dark" ? "text-white" : "text-black"
                } mt-4 mb-8 tracking-tight`}
              >
                Start your journey with Tredumo today
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.3 },
                }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link
                  to="/contact"
                  className={`${
                    theme === "dark"
                      ? "bg-white text-black hover:bg-gray-100"
                      : "bg-black text-white hover:bg-gray-900"
                  } px-8 py-4 rounded-full transition-all duration-300 font-medium text-sm tracking-wide flex items-center justify-center group relative overflow-hidden`}
                >
                  <span className="relative z-10">Get Started</span>
                  <motion.span
                    className="relative z-10 inline ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform"
                    animate={{
                      x: [0, 5, 0],
                      transition: {
                        repeat: Number.POSITIVE_INFINITY,
                        duration: 1.5,
                        ease: "easeInOut",
                        repeatType: "reverse",
                      },
                    }}
                  >
                    <ArrowRight />
                  </motion.span>
                </Link>
                <Link
                  to="/pricing"
                  className={`${
                    theme === "dark"
                      ? "bg-white/10 text-white hover:bg-white/20"
                      : "bg-black/10 text-black hover:bg-black/20"
                  } backdrop-blur-xl px-8 py-4 rounded-full transition-all duration-300 font-medium text-sm tracking-wide relative overflow-hidden group`}
                >
                  <span className="relative z-10">View Pricing</span>
                  <motion.span
                    className={`absolute inset-0 ${
                      theme === "dark" ? "bg-white/5" : "bg-black/5"
                    } transform origin-left`}
                    initial={{ scaleX: 0 }}
                    whileHover={{
                      scaleX: 1,
                      transition: { duration: 0.3 },
                    }}
                  />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
