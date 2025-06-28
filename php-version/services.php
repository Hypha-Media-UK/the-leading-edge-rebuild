<?php
// Include configuration
require_once 'includes/config.php';

// Page-specific variables
$current_page = 'services';
$page_title = 'Services - ' . $site_name;
$page_description = 'Professional hair and beauty services at The Leading Edge salon. Expert cutting, styling, colouring, beauty treatments, and massage therapy in Hyde, Cheshire.';
$page_css = 'services';
$page_js = 'services';

// Include meta/head section
include 'components/meta.php';
?>

<?php include 'components/header.php'; ?>

<main>
    <div class="services-page">
        <!-- Page Header -->
        <section class="page-header">
            <div class="container">
                <div class="page-header-content">
                    <h1>Salon Services</h1>
                    <p>Our award-winning salon is operated by a dynamic, creative and professional team all head hunted for their skills and knowledge</p>
                </div>
            </div>
        </section>

        <!-- Services Intro -->
        <section class="services-intro section">
            <div class="container">
                <div class="intro-content">
                    <p>All our stylists are supported with training through the "Wella Academy" where they learn new skills and techniques to keep up to date with all the latest colours and trends. Rest assured our team will give you valuable tips and advice on how to keep your style and hair in tip top condition.</p>
                    <p>We continually score 4.91 out of 5 in over 1800 independent reviews carried out by visitors to our salon.</p>
                </div>
            </div>
        </section>

        <!-- Services Tabs -->
        <section class="services-tabs section">
            <div class="container">
                <!-- Main Tabs -->
                <div class="main-tabs-container">
                    <div class="main-tab active" data-tab="allHair">
                        <i class="fas fa-cut"></i>
                        <span>All Hair</span>
                    </div>
                    <div class="main-tab" data-tab="beautyNails">
                        <i class="fas fa-spa"></i>
                        <span>Beauty & Nails</span>
                    </div>
                    <div class="main-tab" data-tab="massageAesthetics">
                        <i class="fas fa-hand-sparkles"></i>
                        <span>Massage & Aesthetics</span>
                    </div>
                </div>

                <!-- Sub Tabs -->
                <div class="sub-tabs-container">
                    <!-- Hair Sub-tabs -->
                    <div class="sub-tabs-group active" data-main-tab="allHair">
                        <div class="sub-tab active" data-sub-tab="cuttingStyling">
                            <span>Cutting & Styling</span>
                        </div>
                        <div class="sub-tab" data-sub-tab="treatments">
                            <span>Treatments</span>
                        </div>
                        <div class="sub-tab" data-sub-tab="highlights">
                            <span>Highlights</span>
                        </div>
                        <div class="sub-tab" data-sub-tab="tints">
                            <span>Tints</span>
                        </div>
                        <div class="sub-tab" data-sub-tab="occasions">
                            <span>Occasions</span>
                        </div>
                    </div>

                    <!-- Beauty Sub-tabs -->
                    <div class="sub-tabs-group" data-main-tab="beautyNails">
                        <div class="sub-tab active" data-sub-tab="bodyWaxing">
                            <span>Body Waxing</span>
                        </div>
                        <div class="sub-tab" data-sub-tab="facialWaxThreading">
                            <span>Facial Wax & Threading</span>
                        </div>
                        <div class="sub-tab" data-sub-tab="eyesNails">
                            <span>Eyes & Nails</span>
                        </div>
                    </div>

                    <!-- Massage Sub-tabs -->
                    <div class="sub-tabs-group" data-main-tab="massageAesthetics">
                        <div class="sub-tab active" data-sub-tab="bodyMassage">
                            <span>Body Massage</span>
                        </div>
                        <div class="sub-tab" data-sub-tab="facialMassage">
                            <span>Facial Massage</span>
                        </div>
                        <div class="sub-tab" data-sub-tab="aestheticTreatments">
                            <span>Treatments</span>
                        </div>
                    </div>
                </div>

                <!-- Content Sections -->
                <div class="services-content">
                    <!-- Hair Services - Cutting & Styling -->
                    <div class="content-section active" data-content="allHair-cuttingStyling">
                        <div class="services-intro">
                            <h2>Hair Styling & Haircare for Women</h2>
                            <div class="description">
                                <p>We currently have a team of 8 fully qualified hairdressers who are all highly experienced and are available to cater for all your needs including colouring, cutting and perms. Supported by the Wella educational team they are well trained and fully up to date with all the latest cuts, colours and trends.</p>
                                <p>The Wella name is synonymous with innovative hair care and they are consistently the first to market with new technologies developed to meet the ever-changing needs of the consumer. The Wella brand is one of the most recognisable in the industry and is a guarantee of performance and quality all in keeping with our brand and ethos. We also have an extensive range of styling and haircare products for sale from Wella, Mood, Nioxin, and American Crew.</p>
                            </div>
                        </div>

                        <div class="service-gallery">
                            <div class="gallery-grid">
                                <div class="gallery-item">
                                    <img src="images/new/misc/style1.webp" alt="Hair Styling Example 1">
                                </div>
                                <div class="gallery-item">
                                    <img src="images/new/misc/style2.webp" alt="Hair Styling Example 2">
                                </div>
                                <div class="gallery-item">
                                    <img src="images/new/misc/style3.webp" alt="Hair Styling Example 3">
                                </div>
                                <div class="gallery-item">
                                    <img src="images/new/misc/style4.webp" alt="Hair Styling Example 4">
                                </div>
                            </div>
                        </div>

                        <div class="services-list">
                            <div class="service-item">
                                <div class="service-info">
                                    <h3>SHAMPOO CUT & BLOW DRY</h3>
                                </div>
                                <div class="service-price">£30.00</div>
                            </div>
                            <div class="service-item">
                                <div class="service-info">
                                    <h3>RE-STYLE CUT & FINISH</h3>
                                </div>
                                <div class="service-price">£36.00</div>
                            </div>
                            <div class="service-item">
                                <div class="service-info">
                                    <h3>LONG HAIR CUT & BLOW DRY</h3>
                                </div>
                                <div class="service-price">£36.00</div>
                            </div>
                            <div class="service-item">
                                <div class="service-info">
                                    <h3>SHAMPOO & BLOW DRY</h3>
                                </div>
                                <div class="service-price">£20.00</div>
                            </div>
                            <div class="service-item">
                                <div class="service-info">
                                    <h3>LONG HAIR BLOW DRY</h3>
                                </div>
                                <div class="service-price">£24.00</div>
                            </div>
                            <div class="service-item">
                                <div class="service-info">
                                    <h3>FRINGE TRIM</h3>
                                </div>
                                <div class="service-price">£4.00</div>
                            </div>
                        </div>
                    </div>

                    <!-- Hair Services - Treatments -->
                    <div class="content-section" data-content="allHair-treatments">
                        <div class="services-intro">
                            <h2>Hair Treatments</h2>
                            <div class="description">
                                <p>We provide both Kerastraight and Olaplex treatments as well as a full range of quality products to enhance and maintain the natural beauty of your hair from Wella and Mood.</p>
                            </div>
                        </div>

                        <div class="additional-content">
                            <div class="treatment-section">
                                <h3>Kerastraight</h3>
                                <p>Today there is a real demand for shiny, healthy and easy to manage hair. This gave the inspiration behind Fabriq's award-winning range of treatments all available in our salon. As well as leaving the hair feeling healthy, straighter, stronger and possessing a maximum enhanced shine Fabriq will also repair and strengthen the hair simultaneously. We use an advanced range of Protein treatments.</p>
                            </div>
                            
                            <div class="treatment-section">
                                <h3>Olaplex</h3>
                                <p>Olaplex is known as "The One Ingredient Changes Everything". It was designed by scientists in Materials and Chemistry who both came from the world of cosmetics and science. Olaplex has a single active ingredient which is designed to reconnect the disulphide bonds broken by the process of permanent hair colouring and lightening.</p>
                                <p>Here at The Leading Edge we can say hand on heart that once you have tried the Olaplex treatment you will wonder why you have been without it before.</p>
                            </div>
                        </div>

                        <div class="services-list">
                            <div class="service-item">
                                <div class="service-info">
                                    <h3>MILK_SHAKE INTEGRITY</h3>
                                </div>
                                <div class="service-price">£15.00</div>
                            </div>
                            <div class="service-item">
                                <div class="service-info">
                                    <h3>MILK_SHAKE PAPAYA</h3>
                                </div>
                                <div class="service-price">£9.50</div>
                            </div>
                            <div class="service-item">
                                <div class="service-info">
                                    <h3>MILK_SHAKE COCOA</h3>
                                </div>
                                <div class="service-price">£9.50</div>
                            </div>
                            <div class="service-item">
                                <div class="service-info">
                                    <h3>WELLA INVIGO MASK</h3>
                                </div>
                                <div class="service-price">£10.00</div>
                            </div>
                            <div class="service-item">
                                <div class="service-info">
                                    <h3>OLAPLEX FROM</h3>
                                </div>
                                <div class="service-price">£12.00</div>
                            </div>
                            <div class="service-item">
                                <div class="service-info">
                                    <h3>FABRIQ INC SHAMP / COND</h3>
                                </div>
                                <div class="service-price">£169.00</div>
                            </div>
                        </div>
                    </div>

                    <!-- Hair Services - Highlights -->
                    <div class="content-section" data-content="allHair-highlights">
                        <div class="services-intro">
                            <h2>Highlights</h2>
                            <div class="description">
                                <p>We provide an extensive range of colouring techniques, to bring you the latest looks and the fashion styles you see in magazines and in the media. All our qualified stylists are trained in the latest techniques and stay at the forefront of hair fashion.</p>
                            </div>
                        </div>

                        <div class="services-list">
                            <div class="service-item">
                                <div class="service-info">
                                    <h3>FULL HEAD HIGHLIGHTS</h3>
                                </div>
                                <div class="service-price">from £65.00</div>
                            </div>
                            <div class="service-item">
                                <div class="service-info">
                                    <h3>HALF HEAD HIGHLIGHTS</h3>
                                </div>
                                <div class="service-price">from £55.00</div>
                            </div>
                            <div class="service-item">
                                <div class="service-info">
                                    <h3>T-SECTION HIGHLIGHTS</h3>
                                </div>
                                <div class="service-price">from £45.00</div>
                            </div>
                            <div class="service-item">
                                <div class="service-info">
                                    <h3>FULL HEAD TINT</h3>
                                </div>
                                <div class="service-price">from £50.00</div>
                            </div>
                            <div class="service-item">
                                <div class="service-info">
                                    <h3>BALAYAGE</h3>
                                </div>
                                <div class="service-price">from £70.00</div>
                            </div>
                            <div class="service-item">
                                <div class="service-info">
                                    <h3>COLOUR CORRECTION</h3>
                                </div>
                                <div class="service-price">Price on consultation</div>
                            </div>
                        </div>
                    </div>

                    <!-- Hair Services - Tints -->
                    <div class="content-section" data-content="allHair-tints">
                        <div class="services-intro">
                            <h2>Tints</h2>
                            <div class="description">
                                <p>Our expert colorists provide full and partial tinting services using the highest quality products to ensure vibrant, long-lasting color.</p>
                            </div>
                        </div>

                        <div class="services-list">
                            <div class="service-item">
                                <div class="service-info">
                                    <h3>FULL HEAD TINT</h3>
                                </div>
                                <div class="service-price">from £50.00</div>
                            </div>
                            <div class="service-item">
                                <div class="service-info">
                                    <h3>ROOT TINT</h3>
                                </div>
                                <div class="service-price">from £40.00</div>
                            </div>
                            <div class="service-item">
                                <div class="service-info">
                                    <h3>TINT & HIGHLIGHTS</h3>
                                </div>
                                <div class="service-price">from £75.00</div>
                            </div>
                        </div>
                    </div>

                    <!-- Hair Services - Occasions -->
                    <div class="content-section" data-content="allHair-occasions">
                        <div class="services-intro">
                            <h2>Special Occasions</h2>
                            <div class="description">
                                <p>Make your special day unforgettable with our professional styling services for weddings, proms, and other important events.</p>
                            </div>
                        </div>

                        <div class="services-list">
                            <div class="service-item">
                                <div class="service-info">
                                    <h3>BRIDAL HAIR</h3>
                                    <p>Complete bridal styling including consultation and trial.</p>
                                </div>
                                <div class="service-price">from £90.00</div>
                            </div>
                            <div class="service-item">
                                <div class="service-info">
                                    <h3>SPECIAL OCCASION STYLING</h3>
                                    <p>Styling for proms, parties, and special events.</p>
                                </div>
                                <div class="service-price">from £50.00</div>
                            </div>
                            <div class="service-item">
                                <div class="service-info">
                                    <h3>BRIDAL PARTY PACKAGE</h3>
                                    <p>Styling for bride and bridesmaids (price per person).</p>
                                </div>
                                <div class="service-price">from £45.00</div>
                            </div>
                        </div>
                    </div>

                    <!-- Beauty & Nails - Body Waxing -->
                    <div class="content-section" data-content="beautyNails-bodyWaxing">
                        <div class="services-intro">
                            <h2>Body Waxing</h2>
                            <div class="description">
                                <p>Our professional waxing services provide smooth, long-lasting results with minimal discomfort. We use premium quality wax suitable for all skin types.</p>
                            </div>
                        </div>

                        <div class="services-list">
                            <div class="service-item">
                                <div class="service-info">
                                    <h3>HALF LEG WAX</h3>
                                </div>
                                <div class="service-price">£22.00</div>
                            </div>
                            <div class="service-item">
                                <div class="service-info">
                                    <h3>FULL LEG WAX</h3>
                                </div>
                                <div class="service-price">£30.00</div>
                            </div>
                            <div class="service-item">
                                <div class="service-info">
                                    <h3>BIKINI WAX</h3>
                                </div>
                                <div class="service-price">£15.00</div>
                            </div>
                            <div class="service-item">
                                <div class="service-info">
                                    <h3>UNDERARM WAX</h3>
                                </div>
                                <div class="service-price">£12.00</div>
                            </div>
                            <div class="service-item">
                                <div class="service-info">
                                    <h3>FULL ARM WAX</h3>
                                </div>
                                <div class="service-price">£25.00</div>
                            </div>
                        </div>
                    </div>

                    <!-- Beauty & Nails - Facial Wax & Threading -->
                    <div class="content-section" data-content="beautyNails-facialWaxThreading">
                        <div class="services-intro">
                            <h2>Facial Wax & Threading</h2>
                            <div class="description">
                                <p>Our precision facial hair removal services using both waxing and threading techniques for flawless results.</p>
                            </div>
                        </div>

                        <div class="services-list">
                            <div class="service-item">
                                <div class="service-info">
                                    <h3>EYEBROW WAX</h3>
                                </div>
                                <div class="service-price">£10.00</div>
                            </div>
                            <div class="service-item">
                                <div class="service-info">
                                    <h3>EYEBROW THREADING</h3>
                                </div>
                                <div class="service-price">£12.00</div>
                            </div>
                            <div class="service-item">
                                <div class="service-info">
                                    <h3>LIP WAX</h3>
                                </div>
                                <div class="service-price">£8.00</div>
                            </div>
                            <div class="service-item">
                                <div class="service-info">
                                    <h3>CHIN WAX</h3>
                                </div>
                                <div class="service-price">£8.00</div>
                            </div>
                        </div>
                    </div>

                    <!-- Beauty & Nails - Eyes & Nails -->
                    <div class="content-section" data-content="beautyNails-eyesNails">
                        <div class="services-intro">
                            <h2>Eyes & Nails</h2>
                            <div class="description">
                                <p>Complete eye enhancement services and professional nail treatments for beautiful, healthy nails.</p>
                            </div>
                        </div>

                        <div class="services-list">
                            <div class="service-item">
                                <div class="service-info">
                                    <h3>EYELASH TINT</h3>
                                </div>
                                <div class="service-price">£15.00</div>
                            </div>
                            <div class="service-item">
                                <div class="service-info">
                                    <h3>EYEBROW TINT</h3>
                                </div>
                                <div class="service-price">£10.00</div>
                            </div>
                            <div class="service-item">
                                <div class="service-info">
                                    <h3>MANICURE</h3>
                                </div>
                                <div class="service-price">£25.00</div>
                            </div>
                            <div class="service-item">
                                <div class="service-info">
                                    <h3>PEDICURE</h3>
                                </div>
                                <div class="service-price">£30.00</div>
                            </div>
                            <div class="service-item">
                                <div class="service-info">
                                    <h3>GEL MANICURE</h3>
                                </div>
                                <div class="service-price">£35.00</div>
                            </div>
                        </div>
                    </div>

                    <!-- Massage & Aesthetics - Coming Soon -->
                    <div class="content-section" data-content="massageAesthetics-bodyMassage">
                        <div class="services-intro">
                            <h2>Coming Soon</h2>
                            <div class="description">
                                <p>We're currently updating our detailed service information for this section. Please check back soon for complete details!</p>
                            </div>
                        </div>
                    </div>

                    <div class="content-section" data-content="massageAesthetics-facialMassage">
                        <div class="services-intro">
                            <h2>Coming Soon</h2>
                            <div class="description">
                                <p>We're currently updating our detailed service information for this section. Please check back soon for complete details!</p>
                            </div>
                        </div>
                    </div>

                    <div class="content-section" data-content="massageAesthetics-aestheticTreatments">
                        <div class="services-intro">
                            <h2>Coming Soon</h2>
                            <div class="description">
                                <p>We're currently updating our detailed service information for this section. Please check back soon for complete details!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Booking CTA -->
        <section class="call-to-action" style="background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('images/new/internal/int1.webp')">
            <div class="container">
                <div class="cta-content text-center">
                    <h2>Ready to book your appointment?</h2>
                    <p>Our team of expert stylists and beauty professionals are ready to help you look and feel your best.</p>
                    <a href="contact.php" class="btn primary">Book Appointment</a>
                </div>
            </div>
        </section>
    </div>
</main>

<?php include 'components/footer.php'; ?>

<?php include 'components/scripts.php'; ?>
