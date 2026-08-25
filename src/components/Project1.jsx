import "../styles/Project1.css";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import p1Img from "../assets/P1.webp";
import github from "../assets/icons/github.svg";


function Project1() {
    return (
        <main className="p1">
            <Link className="back-btn" to="/">
                <ArrowLeft size={20} />
                <span>Quay lại</span>
            </Link>
            <div className="p1-container">
                <div className="p1-img">
                    <img 
                        src={p1Img} 
                        alt="Nambercay V1 - Landing page Terrarium"
                        loading="eager"
                    />
                </div>
                <div className="p1-detail">
                    <h1 className="title">Nambercay V1</h1>
                    <div className="skill-cards">
                        <div className="skill">HTML5</div>
                        <div className="skill">CSS3</div>
                        <div className="skill">JavaScript</div>
                        <div className="skill">Responsive</div>
                    </div>
                    <h3 className="subtitle">Website landing page giới thiệu các mẫu Terrarium tiêu biểu và cung cấp điểm truy cập đơn giản để khách hàng tham khảo sản phẩm</h3>
                    <div className="btns">
                        <a 
                            href="https://hoangg301.github.io/Nambercay-Shop"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="demo-btn"
                        >
                            <ExternalLink size={18} />
                            <span>Xem demo</span>
                        </a>
                        <a
                            href="https://github.com/hoangg301/Nambercay-Shop"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="code-btn"
                        >
                            <img src={github} alt="GitHub icon" />
                            <span>Xem code</span>                   
                        </a>
                    </div>
                </div>
            </div>

            <div className="feature-row">
                <div className="feature-col">
                    <section className="general">
                        <h2>1. Tổng quan</h2>
                        <p>
                            Nambercay V1 là project đầu tiên mình thực hiện sau khoảng 3 tháng học frontend.
                        </p>
                        <p>
                            Project được xây dựng theo hướng landing page, tập trung vào hình ảnh, phân loại sản phẩm.
                        </p>
                    </section>

                    <section className="intention">
                        <h2>2. Mục tiêu</h2>
                        <ul>
                            <li>Thực hành HTML và CSS sau giai đoạn học nền tảng</li>
                            <li>Thực hành JavaScript cho tương tác phía client</li>
                            <li>Rèn luyện responsive design</li>
                            <li>Xây dựng và triển khai một website thực tế</li>
                        </ul>
                    </section>
                </div>

                <section className="deploy">
                    <h2>3. Quá trình</h2>
                    <p>a, HTML</p>
                    <ul>
                        <li>Xây dựng cấu trúc trang và các danh mục sản phẩm</li>
                        <li>Thêm metadata và Open Graph</li>
                    </ul>
                    <p>b, CSS</p>
                    <ul>
                        <li>Xây dựng layout và giao diện bằng CSS</li>
                        <li>Thực hành flexbox, responsive, transition</li>
                    </ul>
                    <p>c, JavaScript</p>
                    <ul>
                        <li>Xử lý popup, chuyển ảnh và danh mục sản phẩm</li>
                        <li>Thực hành khóa scroll khi mở ảnh fullscreen</li>
                    </ul>
                </section>
            </div>

            <section className="scale">
                <h2>4. Quy mô</h2>
                <p>- Single-page website.</p>
                <p>- 5 nhóm sản phẩm.</p>
                <p>- 51 mẫu sản phẩm showcase.</p>
                <p>- Responsive cho mobile, tablet, laptop.</p>
                <p>- Triển khai bằng GitHub Pages.</p>
            </section>

            <section className="exp">
                <h2>5. Những gì tôi học được</h2>
                <p>- Hiểu hơn cách HTML và CSS phối hợp để xây dựng giao diện.</p>               
                <p>- Áp dụng JavaScript cho các tương tác trên giao diện.</p>
                <p>- Có kinh nghiệm làm responsive và debug.</p>
                <p>- Làm quen với quy trình xây dựng, tối ưu và triển khai một website.</p>
            </section>

            <section className="limits">
                <h2>6. Giới hạn hiện tại</h2>
                <p>- Dữ liệu sản phẩm được khai báo trực tiếp trong HTML.</p>
                <p>- CSS và JavaScript chưa được tổ chức theo hướng có thể tái sử dụng.</p>
                <p>- Project phù hợp với quy mô showcase nhỏ, chưa có dữ liệu động.</p>
            </section>

            <div className="footer-btns">
                <Link className="footer-back-btn" to="/">
                    <ArrowLeft size={20} />
                    <span>Trang chủ</span>
                </Link>
                <Link className="footer-next-btn" to="/project2">
                    <span>Nambercay V2</span>
                    <ArrowRight size={20} />
                </Link>
            </div>
        </main>
    )
}

export default Project1;
