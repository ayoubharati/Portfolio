'use client'

const technologies = [
  // 🧠 Languages
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
  { name: 'Scala', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scala/scala-original.svg' },
  { name: 'Solidity', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg' },
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },

  // ⚙️ Frameworks & Libraries
  { name: 'Spring Boot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
  { name: 'Flask', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' },
  { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'React Native', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'TensorFlow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
  { name: 'PyTorch', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
  { name: 'pandas', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },

  // 🧩 APIs & Tools
  { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },

  // 🗄️ Databases
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'Microsoft SQL Server', icon: 'https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },

  // ☁️ Cloud & Virtualization
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-original.svg' },
  { name: 'Terraform', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg' },

  // 🔁 CI/CD
  { name: 'Jenkins', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg' },
  { name: 'GitHub Actions', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },

  // 📊 Data Engineering
  { name: 'Apache Spark', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachespark/apachespark-original.svg' },
  { name: 'Hadoop', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hadoop/hadoop-original.svg' },
  { name: 'Kafka', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg' },

  // 🧰 Tools & Environment
  { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
  { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
]

const certifications = [
  { name: 'AWS Academy Cloud Foundations', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' },
  { name: 'AWS Academy Cloud Architecting', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' },
  { name: 'Oracle Cloud Infrastructure 2025 Certified DevOps Professional', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg' },
]

export default function TechnologiesSection() {
  return (
    <section id="technologies" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* 🧠 Technologies Section */}
        <div className="space-y-10">
          <div className="space-y-4 text-center">
            <h2 className="text-5xl md:text-6xl font-bold text-textDark">
              Technologies I use<span className="text-primary">.</span>
            </h2>
            <p className="text-textLight text-xl">
              A collection of technologies, frameworks, and tools I work with across development, data, and cloud.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-3 px-4 py-3 rounded-full bg-card border border-border hover:border-primary/50 transition-all duration-300"
              >
                <img src={tech.icon} alt={tech.name} className="w-6 h-6 object-contain" />
                <span className="text-sm font-medium text-textDark">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 🏅 Certifications Section */}
        <div className="space-y-6 text-center">
          <h3 className="text-4xl md:text-5xl font-bold text-textDark">
            Certifications<span className="text-primary">.</span>
          </h3>
          <div className="flex flex-wrap gap-4 justify-center">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="flex items-center gap-3 px-5 py-3 rounded-full bg-card border border-border hover:border-primary/50 transition-all duration-300"
              >
                <img src={cert.icon} alt={cert.name} className="w-6 h-6 object-contain" />
                <span className="text-sm font-medium text-textDark">{cert.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
