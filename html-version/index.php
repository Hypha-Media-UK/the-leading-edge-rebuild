<?php
// Include configuration
require_once 'includes/config.php';

// Page-specific variables
$current_page = 'home';
$page_title = $site_name . ' - Hair and Beauty Salon';
$page_description = 'Premium hair and beauty services at The Leading Edge salon in Hyde, Cheshire. Expert styling, cutting, colouring, nail care, and aesthetic treatments.';
$page_css = 'home';
$page_js = 'home';

// Include meta/head section
include 'components/meta.php';
?>

<?php include 'components/header.php'; ?>

<main>
    <div class="home-page">
        <!-- Hero Section -->
        <section class="hero" style="background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('images/new/heros/hero3.webp')">
            <div class="container">
                <div class="hero-content">
                    <div class="text-content">
                        <h1>Experience True <span>Beauty</span> &amp; <span>Elegance</span></h1>
                        <p>At The Leading Edge, we blend artistry with expertise to create looks that enhance your natural beauty.</p>
                    </div>
                    
                    <div class="hero-buttons">
                        <a href="services.php" class="btn btn-secondary">Explore Services</a>
                        <a href="contact.php" class="btn btn-secondary">Book Appointment</a>
                        <a href="offers.php" class="btn btn-primary">Offers & Gift Vouchers</a>
                    </div>
                </div>
            </div>
        </section>

        <!-- Features Section -->
        <section class="features-section section">
            <div class="container">
                <h2 class="text-center">Why Choose Us</h2>
                <div class="features-grid">
                    <div class="feature-card">
                        <div class="feature-icon">
                            <i class="fas fa-crown"></i>
                        </div>
                        <h3>Premium Experience</h3>
                        <p>Luxurious environment and personalized service that exceeds expectations.</p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon">
                            <i class="fas fa-certificate"></i>
                        </div>
                        <h3>Expert Stylists</h3>
                        <p>Our team of highly trained professionals stay ahead of the latest trends and techniques.</p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon">
                            <i class="fas fa-leaf"></i>
                        </div>
                        <h3>Quality Products</h3>
                        <p>We use only premium, sustainable products that are gentle on your hair and the environment.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Services Preview Section -->
        <section class="services-preview-section section">
            <div class="container">
                <div class="section-header text-center">
                    <h2>Our Services</h2>
                    <p>Discover our range of premium hair and beauty services</p>
                </div>
                <div class="services-grid">
                    <div class="service-card">
                        <img src="images/new/services/service1.webp" alt="Styling, Cutting & Colouring">
                        <div class="service-content">
                            <h3>Styling, Cutting & Colouring</h3>
                            <p>Expert cutting, styling and coloring services to create the perfect look tailored to your unique style.</p>
                            <a href="services.php" class="btn btn-primary">Learn More</a>
                        </div>
                    </div>
                    <div class="service-card">
                        <img src="images/new/services/service2.webp" alt="Nail & Beauty Services">
                        <div class="service-content">
                            <h3>Nail & Beauty Services</h3>
                            <p>Complete nail care, facial treatments, and beauty services to enhance your natural features.</p>
                            <a href="services.php" class="btn btn-primary">Learn More</a>
                        </div>
                    </div>
                    <div class="service-card">
                        <img src="images/new/services/service3.webp" alt="Massage & Aesthetic Treatments">
                        <div class="service-content">
                            <h3>Massage & Aesthetic Treatments</h3>
                            <p>Relaxing massage therapy and advanced aesthetic treatments for total body wellness and beauty.</p>
                            <a href="services.php" class="btn btn-primary">Learn More</a>
                        </div>
                    </div>
                </div>
                <div class="text-center mt-3">
                    <a href="services.php" class="btn btn-primary">View All Services</a>
                </div>
            </div>
        </section>

        <!-- Testimonials Section -->
        <section class="testimonials-section section">
            <div class="container">
                <h2 class="text-center">What Our Clients Say</h2>
                <div class="testimonials-carousel">
                    <div class="testimonial-slide active">
                        <div class="testimonial-content">
                            <p>"The Leading Edge has completely transformed my hair care routine. The team is professional, knowledgeable, and always makes me feel welcome."</p>
                            <div class="testimonial-author">
                                <img src="images/new/testimonials/test001.webp" alt="Sarah Johnson">
                                <div class="author-info">
                                    <h4>Sarah Johnson</h4>
                                    <span>Regular Client</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="testimonial-slide">
                        <div class="testimonial-content">
                            <p>"Absolutely love the results every time I visit. The stylists here are true artists and always keep up with the latest trends and techniques."</p>
                            <div class="testimonial-author">
                                <img src="images/new/testimonials/test002.webp" alt="Michael Thompson">
                                <div class="author-info">
                                    <h4>Michael Thompson</h4>
                                    <span>Loyal Customer</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="testimonial-slide">
                        <div class="testimonial-content">
                            <p>"Their attention to detail is incredible. I came in with a vague idea of what I wanted and left with exactly the style I didn't even know I needed!"</p>
                            <div class="testimonial-author">
                                <img src="images/new/testimonials/test003.webp" alt="Emma Wilson">
                                <div class="author-info">
                                    <h4>Emma Wilson</h4>
                                    <span>First-time Client</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="testimonial-slide">
                        <div class="testimonial-content">
                            <p>"The spa treatments here are divine. The perfect place to relax and unwind while being pampered by true professionals."</p>
                            <div class="testimonial-author">
                                <img src="images/new/testimonials/test004.webp" alt="James Reynolds">
                                <div class="author-info">
                                    <h4>James Reynolds</h4>
                                    <span>Spa Regular</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="testimonial-slide">
                        <div class="testimonial-content">
                            <p>"I've been to many salons, but none compare to The Leading Edge. The quality of service and products they use are simply unmatched."</p>
                            <div class="testimonial-author">
                                <img src="images/new/testimonials/test003.webp" alt="Olivia Garcia">
                                <div class="author-info">
                                    <h4>Olivia Garcia</h4>
                                    <span>VIP Member</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="testimonial-controls">
                    <button class="prev-btn" id="prevTestimonial"><i class="fas fa-chevron-left"></i></button>
                    <button class="next-btn" id="nextTestimonial"><i class="fas fa-chevron-right"></i></button>
                </div>
            </div>
        </section>

        <!-- Products Showcase -->
        <section class="products-showcase section">
            <div class="container">
                <div class="section-header text-center">
                    <h2>Premium Products</h2>
                    <p>We partner with the industry's finest brands to bring you exceptional quality</p>
                </div>
                <div class="products-grid">
                    <div class="product-item">
                        <img src="images/new/products/prod1.webp" alt="Premium Brand Product 1">
                    </div>
                    <div class="product-item">
                        <img src="images/new/products/prod2.webp" alt="Premium Brand Product 2">
                    </div>
                    <div class="product-item">
                        <img src="images/new/products/prod3.webp" alt="Premium Brand Product 3">
                    </div>
                    <div class="product-item">
                        <img src="images/new/products/prod4.webp" alt="Premium Brand Product 4">
                    </div>
                </div>
                <div class="text-center mt-3">
                    <a href="#" class="btn btn-primary">
                        <i class="fas fa-shopping-cart"></i>
                        View our Online Shop
                    </a>
                </div>
            </div>
        </section>

        <!-- Instagram Feed -->
        <section class="instagram-feed section">
            <div class="container">
                <div class="section-header text-center">
                    <h2>Follow Our Journey</h2>
                    <p>Stay updated with our latest styles and salon updates</p>
                </div>
                <div class="instagram-grid">
                    <div class="instagram-item">
                        <img src="images/new/insta/insta1.webp" alt="Instagram Post">
                    </div>
                    <div class="instagram-item">
                        <img src="images/new/insta/insta2.webp" alt="Instagram Post">
                    </div>
                    <div class="instagram-item">
                        <img src="images/new/insta/insta3.webp" alt="Instagram Post">
                    </div>
                    <div class="instagram-item">
                        <img src="images/new/insta/insta4.webp" alt="Instagram Post">
                    </div>
                    <div class="instagram-item">
                        <img src="images/new/insta/insta5.webp" alt="Instagram Post">
                    </div>
                    <div class="instagram-item">
                        <img src="images/new/insta/insta6.webp" alt="Instagram Post">
                    </div>
                </div>
                <div class="text-center mt-3">
                    <a href="https://instagram.com" class="btn btn-primary" target="_blank">Follow Us @TheLeadingEdge</a>
                </div>
            </div>
        </section>

        <!-- Call to Action -->
        <section class="call-to-action" style="background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('images/new/internal/int1.webp')">
            <div class="container">
                <div class="cta-content text-center">
                    <h2>Ready for a Transformation?</h2>
                    <p>Book your appointment today and experience the difference at The Leading Edge.</p>
                    <a href="contact.php" class="btn btn-primary">Book Now</a>
                </div>
            </div>
        </section>
    </div>
</main>

<?php include 'components/footer.php'; ?>

<?php include 'components/scripts.php'; ?>
