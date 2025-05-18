import Link from 'next/link';

export default function Home() {
    return (
        <div>

            <div className="fixed inset-0 -z-10 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-gradientFrom via-gradientTo to-pink-600 opacity-20 animate-gradient-flow"></div>
            </div>

            <nav className="bg-white backdrop-blur-md fixed w-full z-20 top-0 start-0 border-b border-gray-700/50 shadow-xl">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <p className="flex items-center space-x-3 rtl:space-x-reverse">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-accent h-8 w-8"
                        >
                            <path d="M12 2a4.5 4.5 0 0 0-4.5 4.5V12h9V6.5A4.5 4.5 0 0 0 12 2Z"></path>
                            <circle cx="12" cy="12" r="2"></circle>
                            <path d="M12 12v2.5a4.5 4.5 0 1 1-4.5 4.5V19a4.5 4.5 0 0 0 4.5-4.5Z"></path>
                            <path d="M12 12h4.5a4.5 4.5 0 1 1-4.5 4.5V19a4.5 4.5 0 0 1 4.5-4.5Z"></path>
                        </svg>
                        <span className="self-center text-2xl font-header font-semibold whitespace-nowrap text-light">
        Học thông minh
      </span>
                    </p>

                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <Link href="/workspace"
                            type="button"
                            className="text-dark bg-accent hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-4 py-2 text-center transition-colors duration-200"
                        >
                            Bắt đầu miễn phí
                        </Link>

                    </div>


                </div>
            </nav>


            <section id="home" className="py-12 md:py-20 lg:py-28">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="scroll-animate is-visible">
                            <h1 className="font-header text-4xl sm:text-5xl lg:text-6xl font-bold text-light mb-6 leading-tight">
                                Khai phá <span className="bg-clip-text text-red-500 bg-gradient-to-r from-primary-DEFAULT to-secondary-DEFAULT">
            Tiềm năng
          </span> học tập cùng trí tuệ nhân tạo
                            </h1>
                            <p className="text-lg text-red-300 mb-8 leading-relaxed">
                                Trải nghiệm phương pháp học cá nhân hóa, phù hợp với tốc độ và phong cách của bạn —
                                được hỗ trợ bởi công nghệ AI tiên tiến. Học thông minh là tương lai của việc chinh phục kỹ năng mới. 🧠✨
                            </p>
                        </div>
                    </div>
                </div>
            </section>



            <section id="features" className="py-16 md:py-24 bg-dark/50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12 md:mb-16 scroll-animate is-visible">
                        <h2 className="font-header text-3xl sm:text-4xl font-bold text-light mb-4">
                            Vì sao <span className="bg-clip-text text-red-500 bg-gradient-to-r from-primary-DEFAULT to-secondary-DEFAULT">Học thông minh</span> khác biệt ✨
                        </h2>
                        <p className="text-lg text-red-300 max-w-2xl mx-auto">
                            Nền tảng ứng dụng trí tuệ nhân tạo để mang đến trải nghiệm học tập độc đáo và hiệu quả vượt trội.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Tính năng 1 */}
                        <div className="bg-gray-800/70 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-primary-DEFAULT/30 transition-all duration-300 transform hover:-translate-y-1 scroll-animate delay-100 is-visible">
                            <div className="inline-block p-3 bg-gradient-to-br from-primary-DEFAULT to-secondary-DEFAULT rounded-lg mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"
                                     fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                     className="lucide lucide-brain-cog">
                                    <path d="M12 2a4.5 4.5 0 0 0-4.5 4.5V12h9V6.5A4.5 4.5 0 0 0 12 2Z"></path>
                                    <path d="M12 12v2.5a4.5 4.5 0 1 1-4.5 4.5V19a4.5 4.5 0 0 0 4.5-4.5V12Z"></path>
                                    <path d="M12 12h4.5a4.5 4.5 0 1 1-4.5 4.5V19a4.5 4.5 0 0 1 4.5-4.5V12Z"></path>
                                    <path d="M15 13a3 3 0 1 0-3-3"></path>
                                    <path d="M12 9.5V12l1.5 1"></path>
                                    <path d="M17.5 17.5a2.5 2.5 0 1 0-2.5-2.5"></path>
                                    <path d="M15 15.5V18l1.5 1"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl text-red-500 font-header font-semibold text-light mb-2">Lộ trình học cá nhân hóa</h3>
                            <p className="text-red-300 text-sm leading-relaxed">
                                Thuật toán AI xây dựng lộ trình học riêng phù hợp với kỹ năng, mục tiêu và tốc độ học của bạn.
                            </p>
                        </div>

                        {/* Tính năng 2 */}
                        <div className="bg-gray-800/70 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-primary-DEFAULT/30 transition-all duration-300 transform hover:-translate-y-1 scroll-animate delay-200 is-visible">
                            <div className="inline-block p-3 bg-gradient-to-br from-primary-DEFAULT to-secondary-DEFAULT rounded-lg mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"
                                     fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                     className="lucide lucide-zap">
                                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                                </svg>
                            </div>
                            <h3 className="text-xl text-red-500 font-header font-semibold text-light mb-2">Phản hồi tức thì</h3>
                            <p className="text-red-300 text-sm leading-relaxed">
                                Nhận phản hồi AI thông minh, mang tính xây dựng ngay lập tức để giúp bạn tiến bộ nhanh hơn.
                            </p>
                        </div>

                        {/* Tính năng 3 */}
                        <div className="bg-gray-800/70 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-primary-DEFAULT/30 transition-all duration-300 transform hover:-translate-y-1 scroll-animate delay-300 is-visible">
                            <div className="inline-block p-3 bg-gradient-to-br from-primary-DEFAULT to-secondary-DEFAULT rounded-lg mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"
                                     fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                     className="lucide lucide-users-round ">
                                    <path d="M18 21a8 8 0 0 0-12 0"></path>
                                    <circle cx="12" cy="11" r="3"></circle>
                                    <path d="M15.6 20.7A6 6 0 0 1 12 17a6 6 0 0 1-3.6 3.7"></path>
                                    <path d="M8 21a8 8 0 0 1 1.1-3.9"></path>
                                    <circle cx="6" cy="7" r="3"></circle>
                                    <path d="M10.5 15.1A6 6 0 0 0 6 17a6 6 0 0 0-4.5 3.7"></path>
                                    <path d="M16 21a8 8 0 0 0-1.1-3.9"></path>
                                    <circle cx="18" cy="7" r="3"></circle>
                                    <path d="M13.5 15.1A6 6 0 0 1 18 17a6 6 0 0 1 4.5 3.7"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl text-red-500 font-header font-semibold text-light mb-2">AI </h3>
                            <p className="text-red-300 text-sm leading-relaxed">
                                Kết hợp hỗ trợ từ AI 24/7 để bạn luôn có người đồng hành trên hành trình học tập.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            <section id="how-it-works" className="py-16 md:py-24">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12 md:mb-16 scroll-animate is-visible">
                        <h2 className="font-header text-3xl sm:text-4xl font-bold text-light mb-4">
                            Hành Trình Học Tập Cùng AI 🚀
                        </h2>
                        <p className="text-lg text-red-300 max-w-2xl mx-auto">
                            Một quy trình đơn giản, trực quan giúp bạn bắt đầu con đường học tập cá nhân hóa.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        {/* Step 1 */}
                        <div className="scroll-animate delay-100 is-visible">
                            <div
                                className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-gradient-to-br from-primary-DEFAULT to-secondary-DEFAULT text-light shadow-lg"
                                aria-label="Đăng ký và đặt mục tiêu">
                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                     strokeLinejoin="round" className="lucide lucide-user-plus">
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="9" cy="7" r="4"></circle>
                                    <line x1="19" x2="19" y1="8" y2="14"></line>
                                    <line x1="22" x2="16" y1="11" y2="11"></line>
                                </svg>
                            </div>
                            <h3 className="text-2xl font-header text-light mb-2">1. Đăng ký & Đặt mục tiêu</h3>
                            <p className="text-red-400">
                                Cho chúng tôi biết mục tiêu học tập của bạn. Tham vọng của bạn chính là nhiên liệu để AI cá nhân hóa lộ trình.
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div className="scroll-animate delay-200 is-visible">
                            <div
                                className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-gradient-to-br from-primary-DEFAULT to-secondary-DEFAULT text-light shadow-lg"
                                aria-label="Đánh giá bằng AI">
                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                     strokeLinejoin="round" className="lucide lucide-lightbulb">
                                    <path d="M15 14c.2-1 .7-1.7 1.5-2.5C17.7 10.2 18 9.2 18 8A6 6 0 0 0 6 8c0 1.2.3 2.2 1.5 3.5.7.7 1.2 1.5 1.5 2.5"></path>
                                    <path d="M9 18h6"></path>
                                    <path d="M10 22h4"></path>
                                </svg>
                            </div>
                            <h3 className="text-2xl font-header text-light mb-2">2. Đánh giá thông minh</h3>
                            <p className="text-red-400">
                                Hệ thống AI phân tích trình độ hiện tại để xây dựng chương trình học riêng cho bạn.
                            </p>
                        </div>

                        {/* Step 3 */}
                        <div className="scroll-animate delay-300 is-visible">
                            <div
                                className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-gradient-to-br from-primary-DEFAULT to-secondary-DEFAULT text-light shadow-lg"
                                aria-label="Học tập theo lộ trình">
                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                     strokeLinejoin="round" className="lucide lucide-route">
                                    <circle cx="6" cy="19" r="3"></circle>
                                    <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"></path>
                                    <circle cx="18" cy="5" r="3"></circle>
                                </svg>
                            </div>
                            <h3 className="text-2xl font-header text-light mb-2">3. Học tập & Chinh phục</h3>
                            <p className="text-red-400">
                                Bắt đầu lộ trình học tập được cá nhân hóa, theo dõi tiến độ và làm chủ kiến thức.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            <section id="testimonials" className="py-16 md:py-24 bg-dark/50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12 md:mb-16 scroll-animate is-visible">
                        <h2 className="font-header text-3xl sm:text-4xl font-bold text-light mb-4">
                            Học viên yêu thích Học thông minh ❤️
                        </h2>
                        <p className="text-lg text-red-300 max-w-2xl mx-auto">
                            Không chỉ là lời nói từ chúng tôi — hãy xem những gì học viên thực sự chia sẻ!
                        </p>
                    </div>

                    <div id="testimonial-carousel" className="relative w-full scroll-animate delay-100 is-visible" data-carousel="slide">
                        <div className="relative h-80 overflow-hidden rounded-lg md:h-72">
                            {/* Slide 1 */}
                            <div className="duration-700 ease-in-out absolute inset-0 transition-transform translate-x-0 z-30" data-carousel-item>
                                <div className="flex flex-col items-center justify-center h-full p-8 bg-gray-800/70 backdrop-blur-sm rounded-lg max-w-3xl mx-auto">
                                    <img className="w-20 h-20 mb-4 rounded-full object-cover shadow-md"
                                         src="https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small_2x/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg"
                                         alt="Ảnh người dùng"/>
                                    <p className="text-lg italic text-red-300 text-center mb-3">
                                        "Học thông minh đã thay đổi cách mình học kỹ năng mới. Cá nhân hóa từ AI thật sự ấn tượng – mình tự tin hơn bao giờ hết!"
                                    </p>
                                    <h4 className="text-md font-semibold text-accent">Michael B.</h4>
                                    <p className="text-sm text-red-400">Sinh viên ngành Phát triển Phần mềm</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </section>



            <section id="contact" className="py-16 md:py-24">
                <div className="container mx-auto px-6">
                    <div
                        className="bg-gradient-to-r from-primary-DEFAULT via-secondary-DEFAULT to-pink-600 p-8 md:p-12 lg:p-16 rounded-xl shadow-2xl text-center scroll-animate is-visible">
                        <h2 className="font-header text-3xl sm:text-4xl font-bold text-light mb-4">
                            Sẵn sàng nâng tầm kỹ năng với AI? 🚀
                        </h2>
                        <p className="text-lg text-gray-100 mb-8 max-w-xl mx-auto">
                            Hàng ngàn học viên đã bắt đầu hành trình học tập cùng AI. Bắt đầu lộ trình cá nhân hóa của bạn ngay hôm nay!
                        </p>
                        <Link href={'/workspace'}
                           className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-center text-dark bg-accent rounded-lg hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 transition-all duration-200 transform hover:scale-105 shadow-lg">
                            Bắt đầu miễn phí
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                 className="ml-2 lucide lucide-rocket">
                                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                                <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.87 12.87 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                                <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                                <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-6 py-8">
                <div className="grid md:grid-cols-3 gap-8 items-center">
                    <div className="text-center md:text-left">
                        <p
                           className="flex items-center justify-center md:justify-start space-x-2 rtl:space-x-reverse mb-4 md:mb-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                 className="text-accent h-6 w-6">
                                <path d="M12 2a4.5 4.5 0 0 0-4.5 4.5V12h9V6.5A4.5 4.5 0 0 0 12 2Z"></path>
                                <circle cx="12" cy="12" r="2"></circle>
                                <path d="M12 12v2.5a4.5 4.5 0 1 1-4.5 4.5V19a4.5 4.5 0 0 0 4.5-4.5Z"></path>
                                <path d="M12 12h4.5a4.5 4.5 0 1 1-4.5 4.5V19a4.5 4.5 0 0 1 4.5-4.5Z"></path>
                            </svg>
                            <span className="self-center text-xl font-header font-semibold whitespace-nowrap text-light">
                    AI Learn
                </span>
                        </p>
                        <p className="text-sm text-gray-400 mt-2">Tương lai của giáo dục cá nhân hóa.</p>
                    </div>

                    <div className="text-sm text-gray-400 text-center">
                        © <span id="currentYear">2025</span> Học thông minh. Đã đăng ký bản quyền. <br className="sm:hidden" />
                        <p className="hover:text-accent transition-colors duration-200">Chính sách bảo mật</p> |
                        <p className="hover:text-accent transition-colors duration-200">Điều khoản sử dụng</p>
                    </div>

                    <div className="flex justify-center md:justify-end space-x-5 rtl:space-x-reverse">
                        <a href="#" className="text-gray-400 hover:text-accent transition-colors duration-200" aria-label="Twitter">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 4s-.7 2.1-2 3.4c1.6 1.4 3.3 4.3 3.3 4.3s-1.4.2-2.8.1c.8 2.3 1.8 4.3 1.8 4.3s-1.3.6-2.9.3c-.1.9.1 2.4 0 2.9s-1.5.8-1.5.8s-.3-1.1.2-2.3c-.8.1-2.6.4-4.2-.8s-3.2-2.9-3.2-2.9 1.3.2 2.6.1c-.9-1.1-2.2-3.4-2.2-3.4s.2.1 1.3.1c-.3-1.2-.8-3.3-.8-3.3s1.4.6 2.6.3c.2-.9.1-2.3.1-2.3s1.1-.5 1.1-.5c0 .9-.3 2.1 0 3 .9-.3 2.7-.9 2.7-.9Z"></path>
                            </svg>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-accent transition-colors duration-200" aria-label="GitHub">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                                <path d="M9 18c-4.51 2-5-2-7-2"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    );
}
