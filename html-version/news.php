<?php
// Include configuration
require_once 'includes/config.php';

// Page-specific variables
$current_page = 'news';
$page_title = 'Latest News - ' . $site_name;
$page_description = 'Stay updated with the latest happenings at The Leading Edge salon in Hyde, Cheshire. Read about new services, team updates, beauty tips, and special offers.';
$page_css = 'news';
$page_js = 'news';

// News articles data
$news_articles = [
    [
        'id' => 1,
        'title' => 'Summer Hair Trends 2025',
        'date' => 'June 15, 2025',
        'image' => 'images/new/news/news1.webp',
        'excerpt' => 'Discover the hottest hair trends for Summer 2025. From beachy waves to bold colors, our stylists share their expert predictions.',
        'content' => '<p>As the summer season approaches, it\'s time to refresh your look with the latest hair trends that are making waves in the beauty industry. Our expert stylists at The Leading Edge have compiled their top predictions for the hottest styles of Summer 2025.</p><h4>Textured Bob Cuts</h4><p>The classic bob is getting a modern update with lots of texture and movement. This versatile cut works well for all hair types and can be styled in multiple ways for different occasions.</p><h4>Natural Curls and Waves</h4><p>Embracing your natural texture is bigger than ever. We\'re seeing a move away from the perfectly styled look towards more relaxed, natural curls and waves that celebrate your hair\'s unique characteristics.</p><h4>Bold Color Statements</h4><p>Vibrant colors are making a comeback this season. Think pastel pinks, electric blues, and even multi-colored highlights that add dimension and personality to your style.</p><p>Book your consultation today to find the perfect summer look that suits your style and personality!</p>',
        'category' => 'Hair',
        'author' => 'Emma Thompson'
    ],
    [
        'id' => 2,
        'title' => 'New Organic Skincare Line Now Available',
        'date' => 'June 5, 2025',
        'image' => 'images/new/news/news2.webp',
        'excerpt' => 'We\'re excited to announce our new range of organic, cruelty-free skincare products, now available at The Leading Edge.',
        'content' => '<p>The Leading Edge is proud to introduce our new exclusive line of organic skincare products. Crafted with natural ingredients and formulated without harsh chemicals, these products are designed to nourish and rejuvenate your skin.</p><h4>Sustainable and Ethical</h4><p>Our new skincare line is not only effective but also environmentally conscious. All products are:</p><ul><li>100% organic certified ingredients</li><li>Cruelty-free and vegan</li><li>Packaged in recyclable and biodegradable materials</li><li>Manufactured using sustainable practices</li></ul><h4>Complete Range for All Skin Types</h4><p>The collection includes cleansers, toners, moisturizers, serums, and masks suitable for all skin types. Whether you have dry, oily, combination, or sensitive skin, we have products specifically formulated to address your needs.</p><p>Visit our salon to receive a complimentary skincare consultation with one of our beauty specialists who can recommend the perfect products for your unique skin type and concerns.</p>',
        'category' => 'Beauty',
        'author' => 'Sophia Chen'
    ],
    [
        'id' => 3,
        'title' => 'Meet Our New Senior Stylist, Alex',
        'date' => 'May 20, 2025',
        'image' => 'images/new/news/news3.webp',
        'excerpt' => 'We\'re delighted to welcome Alex Roberts to our team of talented professionals at The Leading Edge.',
        'content' => '<p>The Leading Edge family is growing! We\'re thrilled to introduce our newest senior stylist, Alex Roberts, who brings over 12 years of industry experience to our salon.</p><h4>Expert in Color and Texture</h4><p>Alex specializes in creative color techniques and texture management, with particular expertise in balayage, vivid colors, and curly hair styling. Their work has been featured in several fashion magazines and they have styled hair for multiple runway shows.</p><h4>Training and Certification</h4><p>With training from top academies in London and New York, Alex holds advanced certifications in color correction, extension application, and cutting-edge styling techniques. They regularly attend international hair shows to stay at the forefront of emerging trends.</p><h4>Book with Alex</h4><p>Alex is now accepting new clients and is excited to help you achieve your hair goals. For the month of June, enjoy a 15% discount on your first appointment with Alex when you mention this news article.</p><p>Contact us today to schedule your consultation!</p>',
        'category' => 'Team',
        'author' => 'James Wilson'
    ],
    [
        'id' => 4,
        'title' => 'Bridal Package Special Offer',
        'date' => 'May 10, 2025',
        'image' => 'images/new/news/news4.webp',
        'excerpt' => 'Planning your wedding? Take advantage of our special bridal package that covers all your beauty needs for the big day.',
        'content' => '<p>Your wedding day is one of the most important days of your life, and looking your absolute best is essential. The Leading Edge is offering a comprehensive bridal beauty package to ensure you feel confident and radiant on your special day.</p><h4>Complete Bridal Package Includes:</h4><ul><li>Pre-wedding consultation to plan your perfect look</li><li>Trial hair styling and makeup application</li><li>Wedding day hair styling</li><li>Professional makeup application using premium products</li><li>Manicure and pedicure with long-lasting gel polish</li><li>Relaxing facial treatment one week before the wedding</li><li>Complimentary glass of champagne on the wedding day</li></ul><h4>For the Wedding Party</h4><p>We also offer packages for bridesmaids, mother of the bride/groom, and other members of the wedding party. Book services for 4 or more people and receive a 10% discount on the total.</p><p>Limited availability for Summer 2025 weddings - contact us today to secure your date!</p>',
        'category' => 'Special Offers',
        'author' => 'Emily Parker'
    ],
    [
        'id' => 5,
        'title' => 'Salon Renovation Complete',
        'date' => 'April 25, 2025',
        'image' => 'images/new/news/news5.webp',
        'excerpt' => 'We\'ve upgraded our salon space to enhance your experience. Come visit us to enjoy our new facilities and relaxation areas.',
        'content' => '<p>After months of planning and several weeks of renovation, we\'re excited to announce that our salon makeover is finally complete! We\'ve transformed our space to create an even more luxurious and comfortable environment for our valued clients.</p><h4>New Features Include:</h4><ul><li>Expanded treatment rooms for enhanced privacy during services</li><li>State-of-the-art styling stations with ergonomic chairs</li><li>Dedicated relaxation area with complimentary refreshments</li><li>Improved lighting for more accurate color services</li><li>Enhanced sound system with calming ambient music</li><li>Updated retail area showcasing our premium product ranges</li></ul><h4>Sustainability Improvements</h4><p>Our renovation also focused on making our salon more environmentally friendly. We\'ve installed energy-efficient lighting, water-saving faucets, and chosen eco-friendly materials throughout the space.</p><p>We\'d like to thank our loyal clients for their patience during the renovation process. We invite you to visit and experience our beautiful new salon environment!</p>',
        'category' => 'Salon',
        'author' => 'Abigail Johnson'
    ]
];

// News categories
$news_categories = [
    ['slug' => 'all', 'name' => 'All'],
    ['slug' => 'hair', 'name' => 'Hair'],
    ['slug' => 'beauty', 'name' => 'Beauty'],
    ['slug' => 'team', 'name' => 'Team'],
    ['slug' => 'special-offers', 'name' => 'Special Offers'],
    ['slug' => 'salon', 'name' => 'Salon']
];

// Featured news (first article)
$featured_news = $news_articles[0];

// Regular news (excluding featured)
$regular_news = array_slice($news_articles, 1);

// Include meta/head section
include 'components/meta.php';
?>

<?php include 'components/header.php'; ?>

<main>
    <div class="news-page">
        <!-- Page Header -->
        <section class="page-header">
            <div class="container">
                <div class="page-header-content">
                    <h1>Latest News</h1>
                    <p>Stay updated with the latest happenings at The Leading Edge</p>
                </div>
            </div>
        </section>

        <!-- News Content -->
        <section class="news-content section">
            <div class="container">
                <!-- Featured News -->
                <div class="featured-news">
                    <div class="featured-article" data-article-id="<?php echo $featured_news['id']; ?>">
                        <div class="featured-image">
                            <img src="<?php echo $featured_news['image']; ?>" alt="<?php echo $featured_news['title']; ?>">
                            <div class="featured-overlay">
                                <span class="featured-badge">Featured</span>
                            </div>
                        </div>
                        <div class="featured-content">
                            <div class="article-meta">
                                <span class="article-category"><?php echo $featured_news['category']; ?></span>
                                <span class="article-date"><?php echo $featured_news['date']; ?></span>
                            </div>
                            <h2><?php echo $featured_news['title']; ?></h2>
                            <p class="article-excerpt"><?php echo $featured_news['excerpt']; ?></p>
                            <button class="btn btn-primary read-more-btn" onclick="openArticleModal(<?php echo $featured_news['id']; ?>)">
                                Read More
                            </button>
                        </div>
                    </div>
                </div>

                <!-- News Grid -->
                <div class="news-grid-section">
                    <!-- Category Filter -->
                    <div class="news-filters">
                        <h3>Filter by Category</h3>
                        <div class="filter-buttons">
                            <?php foreach ($news_categories as $category): ?>
                            <button class="filter-btn <?php echo $category['slug'] === 'all' ? 'active' : ''; ?>" 
                                    data-category="<?php echo $category['slug']; ?>">
                                <?php echo $category['name']; ?>
                            </button>
                            <?php endforeach; ?>
                        </div>
                    </div>

                    <!-- News Grid -->
                    <div class="news-grid">
                        <?php foreach ($regular_news as $article): ?>
                        <div class="news-card" data-category="<?php echo strtolower(str_replace(' ', '-', $article['category'])); ?>" data-article-id="<?php echo $article['id']; ?>">
                            <div class="news-image">
                                <img src="<?php echo $article['image']; ?>" alt="<?php echo $article['title']; ?>">
                                <div class="news-overlay">
                                    <button class="read-more-overlay" onclick="openArticleModal(<?php echo $article['id']; ?>)">
                                        <i class="fas fa-plus"></i>
                                        <span>Read More</span>
                                    </button>
                                </div>
                            </div>
                            <div class="news-content">
                                <div class="article-meta">
                                    <span class="article-category"><?php echo $article['category']; ?></span>
                                    <span class="article-date"><?php echo $article['date']; ?></span>
                                </div>
                                <h3><?php echo $article['title']; ?></h3>
                                <p class="article-excerpt"><?php echo $article['excerpt']; ?></p>
                                <button class="btn btn-secondary read-more-btn" onclick="openArticleModal(<?php echo $article['id']; ?>)">
                                    Read More
                                </button>
                            </div>
                        </div>
                        <?php endforeach; ?>
                    </div>
                </div>
            </div>
        </section>

        <!-- Newsletter Signup -->
        <section class="newsletter-signup section">
            <div class="container">
                <div class="newsletter-content">
                    <div class="newsletter-text">
                        <h2>Subscribe to Our Newsletter</h2>
                        <p>Stay updated with the latest news, beauty tips, and exclusive offers straight to your inbox.</p>
                    </div>
                    <div class="newsletter-form">
                        <form id="newsletter-form" onsubmit="handleNewsletterSignup(event)">
                            <div class="form-group">
                                <input type="email" id="newsletter-email" placeholder="Enter your email address" required>
                                <button type="submit" class="btn btn-primary">Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>

    <!-- Article Modal -->
    <div id="article-modal" class="modal">
        <div class="modal-content article-modal-content">
            <div class="modal-header">
                <button class="modal-close" onclick="closeArticleModal()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <div class="article-detail">
                    <div class="article-header">
                        <img id="modal-article-image" src="" alt="">
                        <div class="article-info">
                            <div class="article-meta">
                                <span id="modal-article-category" class="article-category"></span>
                                <span id="modal-article-date" class="article-date"></span>
                            </div>
                            <h1 id="modal-article-title"></h1>
                            <p class="article-author">By <span id="modal-article-author"></span></p>
                        </div>
                    </div>
                    <div class="article-content">
                        <div id="modal-article-content"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>

<!-- Pass news data to JavaScript -->
<script>
window.newsArticlesData = <?php echo json_encode($news_articles); ?>;
</script>

<?php include 'components/footer.php'; ?>

<?php include 'components/scripts.php'; ?>
