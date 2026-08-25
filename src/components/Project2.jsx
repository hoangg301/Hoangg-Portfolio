import "../styles/Project2.css";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import p2Img from "../assets/P2.webp";
import github from "../assets/icons/github.svg";


function Project2() {
    return (
        <main className="p2">
            <Link className="back-btn" to="/">
                <ArrowLeft size={20} />
                <span>Quay lại</span>
            </Link>
            <div className="p2-container">
                <div className="p2-img">
                    <img 
                        src={p2Img} 
                        alt="Nambercay V2 - Website showcase Terrarium"
                        loading="eager"
                    />
                </div>
                <div className="p2-detail">
                    <h1 className="title">Nambercay V2</h1>
                    <div className="skill-cards">
                        <div className="skill">React</div>
                        <div className="skill">React Router</div>
                        <div className="skill">Vite</div>
                        <div className="skill">CSS</div>
                        <div className="skill">Responsive</div>
                        <div className="skill">SEO</div>
                    </div>
                    <h3 className="subtitle">Website showcase nhiều trang giới thiệu sản phẩm cho cửa hàng Terrarium, cung cấp luồng liên hệ trực tiếp với Nambercay</h3>
                    <div className="btns">
                        <a 
                            href="https://nambercay.id.vn"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="demo-btn"
                        >
                            <ExternalLink size={18} />
                            <span>Xem demo</span>
                        </a>
                        <a
                            href="https://github.com/hoangg301/Nambercay_V2"
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
                            Nambercay V2 là project mới nhất, được phát triển từ Nambercay V1.
                        </p>
                        <p>
                            Project được xây dựng bằng React với nhiều page, routing động, dữ liệu sản phẩm được tổ chức riêng.
                        </p>
                    </section>

                    <section className="intention">
                        <h2>2. Mục tiêu</h2>
                        <ul>
                            <li>Thực hành React và React Router qua một project có nhiều page</li>
                            <li>Làm quen với cách tổ chức component và quản lý dữ liệu sản phẩm</li>
                            <li>Cải thiện thiết kế responsive đa thiết bị</li>
                            <li>Tìm hiểu thêm về technical SEO và triển khai website thực tế</li>
                        </ul>
                    </section>
                </div>

                <section className="deploy">
                    <h2>3. Quá trình xây dựng</h2>
                    <p>a, Cấu trúc</p>
                    <ul>
                        <li>Xây dựng các page chính và phân chia component cần thiết cho website</li>
                    </ul>
                    <p>b, Routing</p>
                    <ul>
                        <li>Sử dụng React Router để điều hướng, tạo route động cho từng sản phẩm</li>
                    </ul>
                    <p>c, Dữ liệu sản phẩm</p>
                    <ul>
                        <li>Tách dữ liệu sản phẩm để sử dụng cho Collection và Product Detail</li>
                    </ul>
                    <p>d, Responsive</p>
                    <ul>
                        <li>Điều chỉnh layout cho mobile, tablet, laptop và desktop</li>
                    </ul>
                    <p>e, Product Detail</p>
                    <ul>
                        <li>Xây dựng gallery ảnh, fullscreen và liên hệ qua Messenger</li>
                    </ul>
                    <p>f, SEO & Deploy</p>
                    <ul>
                        <li>Thực hành metadata và triển khai website với domain riêng</li>
                    </ul>
                </section>
            </div>

            <section className="scale">
                <h2>4. Quy mô</h2>
                <p>- Multi-page showcase.</p>
                <p>- 6 page chính, bao gồm Not Found.</p>
                <p>- 4 danh mục, 20 sản phẩm được quản lý từ dữ liệu riêng.</p>
                <p>- Dynamic route cho danh mục và sản phẩm.</p>
                <p>- Responsive đa thiết bị.</p>
                <p>- Triển khai website thực tế với domain riêng.</p>
            </section>

            <section className="exp">
                <h2>5. Những gì tôi học được</h2>
                <p>- Hiểu hơn cách tổ chức một React application có nhiều trang.</p>               
                <p>- Thực hành React Router và dynamic route.</p>
                <p>- Tư duy xây dựng UI theo component và dữ liệu tách biệt.</p>
                <p>- Làm quen với các thành phần technical SEO cơ bản.</p>
                <p>- Hiểu hơn về giới hạn scope để tập trung vào mục tiêu chính của sản phẩm.</p>
            </section>

            <section className="limits">
                <h2>6. Giới hạn hiện tại</h2>
                <p>- Dữ liệu sản phẩm vẫn được quản lý trực tiếp trong source code.</p>
                <p>- Chưa có CMS hoặc backend.</p>
                <p>- Nội dung mô tả sản phẩm còn hạn chế.</p>
                <p>- Một số component, logic vẫn có thể tiếp tục được tái cấu trúc.</p>
            </section>

            <div className="footer-btns">
                <Link className="footer-back-btn" to="/">
                    <ArrowLeft size={20} />
                    <span>Trang chủ</span>
                </Link>
                <Link className="footer-next-btn" to="/project1">
                    <span>Nambercay V1</span>
                    <ArrowRight size={20} />
                </Link>
            </div>
        </main>
    )
}

export default Project2;
