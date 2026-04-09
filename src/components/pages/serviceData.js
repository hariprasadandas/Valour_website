import aiBanner from '../../assets/Banners/AI-banner.jpeg'
import cloudComputing from '../../assets/Images/Cloud-computing.jpeg'
import dataAnalytics from '../../assets/Images/DataAnalytics.jpeg'
import cyberSecurity from '../../assets/Images/CyberSecurity.jpeg'
import apiIntegration from '../../assets/Images/API-Integration.jpeg'
import digitalTransformation from '../../assets/Images/DigitalTransformation.jpeg'
import itOutsourcing from '../../assets/Images/IT-out-sourcing.jpeg'
import posBanner from '../../assets/Banners/POS-banner.jpeg'
import bannerWebDev from '../../assets/Banners/Banner-web-dev.jpeg'
import bannerDiscuss from '../../assets/Banners/Banner-discuss-2mem.png'

export const SERVICE_DETAILS = {
  'pos-restaurant-system': {
    badge: 'Valour Product',
    title: 'Valour POS Restaurant Ordering System',
    subtitle:
      'Our in-house product for restaurants to take orders quickly, send tickets to the kitchen in real time, and track all ongoing orders from a single screen.',
    image: posBanner,
    description:
      'Valour POS is built for restaurants that need speed, clarity, and control during busy service hours. It brings counter ordering, table ordering, kitchen routing, and live order visibility into one streamlined workflow so staff can move faster without losing accuracy. The system reduces manual coordination, improves ticket flow between front-of-house and kitchen teams, and makes billing easier at the point of sale. For operators, it creates a single operational view that improves service quality, shortens wait times, and helps every shift run with less friction.',
  },
  salesforce: {
    badge: 'Service',
    title: 'Salesforce Development',
    subtitle:
      'Implementation, customization, and integration services that help teams run sales, service, and operations on a unified CRM platform.',
    image: bannerDiscuss,
    description:
      'Our Salesforce development services help teams shape the platform around their real business processes rather than forcing teams to adapt to a generic setup. We design and implement Sales Cloud and Service Cloud experiences, build automations and custom logic where needed, and connect Salesforce with external systems so data stays consistent across the organization. The goal is not only to configure CRM features, but to create a reliable operating layer for sales, service, and management teams that supports better visibility, cleaner handoffs, and stronger customer relationships over time.',
  },
  'ai-automation': {
    badge: 'Service',
    title: 'AI & Automation',
    subtitle:
      'Practical AI solutions and workflow automation that reduce repetitive work, improve turnaround time, and increase operational consistency.',
    image: aiBanner,
    description:
      'Our AI and automation work focuses on practical outcomes rather than experimentation for its own sake. We help organizations identify repetitive tasks, design intelligent assistants or workflow automations, and connect those solutions into existing systems so teams can work faster with less manual effort. Whether the goal is document processing, internal copilots, or process acceleration, we approach each solution with governance, maintainability, and business value in mind so the automation can scale safely and continue to deliver measurable impact.',
  },
  'cloud-computing-devops': {
    badge: 'Service',
    title: 'Cloud Computing & DevOps',
    subtitle:
      'Secure cloud foundations and delivery pipelines that improve reliability, reduce release risk, and scale with your growth.',
    image: cloudComputing,
    description:
      'Our cloud and DevOps services are designed to make delivery faster without weakening reliability. We help teams establish secure cloud environments, define release pipelines, and set up the operational controls needed to deploy with confidence. That includes infrastructure design, automation, monitoring, and environment hardening so engineering teams can ship more often while keeping systems stable, observable, and easier to maintain. The result is a cloud foundation that supports business growth instead of becoming a bottleneck.',
  },
  'data-analytics': {
    badge: 'Service',
    title: 'Data & Analytics',
    subtitle:
      'Modern data pipelines and reporting solutions that turn raw data into clear operational and business insight.',
    image: dataAnalytics,
    description:
      'We build data and analytics solutions that transform scattered information into a reliable decision-making asset. Our work typically starts with shaping data flows and preparation layers, then extends into dashboards, reporting views, and KPI automation that leadership and operations teams can actually use. We focus on making data trustworthy, understandable, and timely so organizations can spot trends earlier, measure performance more accurately, and make decisions with greater confidence.',
  },
  cybersecurity: {
    badge: 'Service',
    title: 'Cybersecurity',
    subtitle:
      'Security assessments and controls that help protect critical systems, reduce exposure, and strengthen operational resilience.',
    image: cyberSecurity,
    description:
      'Our cybersecurity service helps businesses reduce risk without adding unnecessary complexity to day-to-day operations. We assess system posture, identify weaknesses in access, configuration, and monitoring, and then help implement the controls that matter most for protecting critical assets. The emphasis is on practical resilience: improving hardening, strengthening detection and response readiness, and building security foundations that support compliance and long-term operational confidence.',
  },
  'web-development': {
    badge: 'Service',
    title: 'Web & App Development',
    subtitle:
      'High-performance web and mobile experiences built with maintainable architecture, modern tooling, and strong UX foundations.',
    image: bannerWebDev,
    description:
      'Our web and app development work is centered on building digital products that feel fast, intuitive, and dependable. We create responsive interfaces, application flows, and backend structures that support modern user expectations while remaining maintainable for engineering teams. Beyond the visual layer, we care about performance, accessibility, and scalability so the product can grow with the business instead of needing constant rework as usage increases.',
  },
  'api-system-integration': {
    badge: 'Service',
    title: 'API & System Integration',
    subtitle:
      'Secure integration layers that connect applications, platforms, and third-party services without breaking operational flow.',
    image: apiIntegration,
    description:
      'Our API and integration services connect the systems that organizations depend on every day. We design integration patterns that move data reliably between applications, platforms, and external services while preserving security, traceability, and operational control. The aim is to remove manual transfer work, reduce silos, and create a connected digital environment where processes can flow smoothly across tools and teams.',
  },
  'digital-transformation': {
    badge: 'Service',
    title: 'Digital Transformation',
    subtitle:
      'Modernization programs that replace bottlenecks, improve customer journeys, and support technology-led growth.',
    image: digitalTransformation,
    description:
      'Digital transformation is about more than moving systems to newer tools. We help organizations rethink workflows, customer journeys, and operating models so technology supports real business change. That can include modernizing legacy processes, simplifying handoffs, improving visibility across teams, and aligning delivery roadmaps to measurable business outcomes. The focus is always on practical change that improves both experience and execution.',
  },
  'it-outsourcing': {
    badge: 'Service',
    title: 'IT Outsourcing',
    subtitle:
      'Dedicated delivery teams that extend your internal capacity with predictable quality, communication, and control.',
    image: itOutsourcing,
    description:
      'Our IT outsourcing service gives organizations access to dedicated engineering and support capacity without the overhead of building everything internally. We work as an extension of your team, aligned to your roadmap, delivery standards, and communication expectations. That makes it easier to scale work predictably, maintain quality, and keep delivery moving whether you need project support, ongoing operations, or a flexible team structure that adapts to changing demand.',
  },
}

export const SERVICES_LIST = [
  {
    slug: 'ai-automation',
    title: 'AI & Automation',
    description:
      'Designing and deploying intelligent AI solutions, copilots, and workflow automation that reduce manual effort, improve speed, and increase operational accuracy.',
  },
  {
    slug: 'cloud-computing-devops',
    title: 'Cloud Computing & DevOps',
    description:
      'Building scalable cloud infrastructure, setting up CI/CD pipelines, and implementing DevOps best practices to deliver faster, safer, and more reliable releases.',
  },
  {
    slug: 'data-analytics',
    title: 'Data & Analytics',
    description:
      'Creating modern data pipelines, dashboards, and analytics solutions that turn raw data into actionable insights for confident, data-driven decisions.',
  },
  {
    slug: 'cybersecurity',
    title: 'Cybersecurity',
    description:
      'Protecting business-critical systems with security assessments, hardening, threat monitoring, and compliance-focused controls to reduce risk.',
  },
  {
    slug: 'web-development',
    title: 'Web & App Development',
    description:
      'Developing high-performance web and mobile applications with modern technologies, intuitive user experiences, and maintainable architecture.',
  },
  {
    slug: 'api-system-integration',
    title: 'API & System Integration',
    description:
      'Connecting platforms, applications, and third-party services through secure APIs and integration layers to enable seamless data and process flow.',
  },
  {
    slug: 'digital-transformation',
    title: 'Digital Transformation',
    description:
      'Modernizing legacy systems, reimagining customer journeys, and enabling technology-led operating models that accelerate business growth.',
  },
  {
    slug: 'it-outsourcing',
    title: 'IT Outsourcing',
    description:
      'Providing dedicated engineering and support teams that extend your in-house capabilities with predictable delivery, quality, and cost control.',
  },
]
