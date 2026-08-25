import "../styles/Home.css";
import { ArrowDown, ArrowRight, Download, FolderCode, BookOpen, UserRound, NotebookPen } from "lucide-react";
import { Link } from "react-router-dom";
import p1Img from "../assets/P1.webp";
import p2Img from "../assets/P2.webp";
import introImg from "../assets/intro-img.webp";
import html5 from "../assets//icons/html5.svg";
import css3 from "../assets/icons/css3.svg";
import js from "../assets/icons/js.svg";
import react from "../assets/icons/react.svg";
import github from "../assets/icons/github.svg";
import responsive from "../assets/icons/responsive.svg";
import email from "../assets/icons/email.svg";

function Home() {
    return (
        <main className="home">
        
            <section className="intro">
                <div className="intro-container">
                    <div className="intro-left">
                        <h1 className="intro-title">Frontend Intern</h1>
                        <h2 className="intro-subtitle">passionate about <br /> building things for the web</h2>
                        <p>Mình là Hoàng, sinh viên định hướng Frontend. Mình thích tạo ra những trải nghiệm web đơn giản, chỉn chu và có giá trị thực tế.</p>
                        <div className="buttons">
                            <button 
                                className="btn project-btn"
                                onClick={() => {
                                    document.getElementById('projects').scrollIntoView({ 
                                        behavior: 'smooth',
                                        block: 'start'
                                    })
                                }}
                            >
                                <span>Xem dự án</span>
                                <ArrowDown size={14} />
                            </button>
                            <button className="btn cv-btn">
                                <span>Tải CV</span>
                                <Download size={14} />
                            </button>
                        </div>
                    </div>
                    <div className="intro-right">
                        <img 
                            src={introImg} 
                            alt="Ảnh minh họa những dòng code của Hoàng"
                            loading="eager"
                        />
                    </div>
                </div>
                <div className="progress-bar">
                    <div className="progress-components">
                        <FolderCode className="progress-icon" />
                        <span className="progress-number">2</span>
                        <span className="progress-text">Dự án</span>
                    </div>
                    <div className="line"></div>
                    <div className="progress-components">
                        <BookOpen className="progress-icon" />
                        <span className="progress-number">1+</span>
                        <span className="progress-text">Năm học</span>
                    </div>
                    <div className="line"></div>
                    <div className="progress-components">
                        <UserRound className="progress-icon" />
                        <span className="progress-number">100%</span>
                        <span className="progress-text">Cá nhân</span>
                    </div> 
                    <div className="line-ext"></div>
                    <div className="progress-components-ext">
                        <NotebookPen className="progress-icon" />
                        <span className="progress-number">Luôn học hỏi</span>
                        <span className="progress-text">và cải thiện mỗi ngày</span>
                    </div>  
                </div>
            </section>

            <section className="projects" id="projects">
                <h2 className="projects-title">Dự án cá nhân</h2>
                <p className="projects-subtitle">Những dự án mình đã thực hiện trong thời gian qua</p>
                <div className="project-container">
                    <div className="project-card">
                        <img 
                            src={p1Img} 
                            alt="Dự án 1" 
                            loading="lazy"
                        />
                        <h4>Nambercay V1</h4>
                        <p>Website landing page tĩnh giới thiệu sản phẩm Terrarium.</p>
                        <Link className="project-link" to="/project1">
                            <span>Xem chi tiết</span>
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                    <div className="project-card">
                        <img 
                            src={p2Img} 
                            alt="Dự án 2" 
                            loading="lazy"
                        />
                        <h4>Nambercay V2</h4>
                        <p>Website showcase cho cửa hàng Terrarium, xây dựng bằng React.</p>
                        <Link className="project-link" to="/project2">
                            <span>Xem chi tiết</span>
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            <section className="skills">
                <h2 className="skills-title">Kỹ năng</h2>
                <p className="skills-subtitle">Những công nghệ và công cụ mình đã học và thực hành</p>
                <div className="skills-list">
                    <div className="skill-item">
                        <img src={html5} alt="HTML5 icon" />
                        <span className="skill-name">HTML5</span>
                    </div>
                    <div className="skill-item">
                        <img src={css3} alt="CSS3 icon" />
                        <span className="skill-name">CSS3</span>
                    </div>
                    <div className="skill-item">
                        <img src={js} alt="JavaScript icon" />
                        <span className="skill-name">JavaScript</span>
                    </div>
                    <div className="skill-item">
                        <img src={react} alt="React icon" />
                        <span className="skill-name">React</span>
                    </div>
                    <div className="skill-item">
                        <img src={github} alt="GitHub icon" />
                        <span className="skill-name">GitHub</span>
                    </div>
                    <div className="skill-item">
                        <img src={responsive} alt="Responsive icon" />
                        <span className="skill-name">Responsive</span>
                    </div>
                </div>
            </section>

            <section className="contact">
                <h2 className="contact-title">Sẵn sàng cho cơ hội Frontend Intern</h2>
                <p className="contact-subtitle">Mình mong muốn được tham gia vào 1 môi trường thực tế để tiếp tục củng cố và học hỏi thêm những kỹ năng mới.</p>
                <div className="contact-container">
                    <a 
                        className="contact-link"
                        href="mailto:hoangg3012005@gmail.com"
                    > 
                        <img src={email} alt="Gmail icon" />
                        <span>Email</span>
                    </a>
                    <a 
                        className="contact-link"
                        href="https://github.com/hoangg301"
                        target="_blank"
                        rel="noopener noreferrer"
                    > 
                        <img src={github} alt="GitHub icon" />
                        <span>GitHub</span>
                    </a>
                    <a href="#" className="contact-link">
                        <Download size={20} />
                        <span>Tải CV</span>
                    </a>
                </div>
            </section>
        </main>
    );
}

export default Home;
