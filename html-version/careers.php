<?php
// Include configuration
require_once 'includes/config.php';

// Page-specific variables
$current_page = 'careers';
$page_title = 'Careers - ' . $site_name;
$page_description = 'Join our team at The Leading Edge salon in Hyde, Cheshire. Explore career opportunities for hair stylists, beauty therapists, and salon professionals.';
$page_css = 'careers';
$page_js = 'careers';

// Career positions data
$positions = [
    [
        'id' => 1,
        'title' => 'Senior Hair Stylist',
        'type' => 'Full-time',
        'location' => 'London',
        'description' => 'We are looking for an experienced hair stylist with a minimum of 5 years in the industry. The ideal candidate will have expertise in cutting, coloring, and styling techniques for all hair types.',
        'responsibilities' => [
            'Provide exceptional hair services to clients including cutting, coloring, and styling',
            'Stay updated on the latest hair trends and techniques',
            'Maintain a clean and organized workspace',
            'Build and maintain a loyal client base',
            'Collaborate with team members for special events and promotions'
        ],
        'requirements' => [
            'Minimum 5 years of experience as a hair stylist',
            'Valid cosmetology license',
            'Strong portfolio demonstrating technical skills',
            'Excellent customer service skills',
            'Ability to work weekends and some evenings'
        ]
    ],
    [
        'id' => 2,
        'title' => 'Beauty Therapist',
        'type' => 'Part-time / Full-time',
        'location' => 'London',
        'description' => 'We are seeking a skilled beauty therapist to join our team. The successful candidate will provide a range of beauty treatments including facials, body treatments, and makeup application.',
        'responsibilities' => [
            'Perform various beauty treatments to the highest standard',
            'Provide skincare consultations and recommend appropriate products',
            'Keep up-to-date with the latest beauty trends and techniques',
            'Maintain treatment room cleanliness and hygiene',
            'Assist with retail sales and promotions'
        ],
        'requirements' => [
            'NVQ Level 3 in Beauty Therapy or equivalent',
            'At least 2 years of experience in a professional salon setting',
            'Knowledge of premium skincare brands and treatments',
            'Excellent communication and interpersonal skills',
            'Flexibility to work evenings and weekends'
        ]
    ],
    [
        'id' => 3,
        'title' => 'Salon Receptionist',
        'type' => 'Full-time',
        'location' => 'London',
        'description' => 'We are looking for a friendly and organized receptionist to be the first point of contact for our clients. The ideal candidate will have excellent communication skills and a passion for customer service.',
        'responsibilities' => [
            'Greet clients and manage the reception desk',
            'Handle booking appointments and managing the salon schedule',
            'Process payments and maintain accurate records',
            'Answer phone calls and respond to emails',
            'Assist with retail sales and inventory management'
        ],
        'requirements' => [
            'Previous experience in a customer service role, preferably in a salon environment',
            'Proficiency with scheduling software and point-of-sale systems',
            'Excellent organizational and multitasking abilities',
            'Professional appearance and friendly demeanor',
            'Available to work flexible hours including weekends'
        ]
    ]
];

// Benefits data
$benefits = [
    [
        'icon' => 'fas fa-graduation-cap',
        'title' => 'Continuous Education',
        'description' => 'We invest in our team\'s growth with regular training sessions, workshops, and opportunities to attend industry events.'
    ],
    [
        'icon' => 'fas fa-chart-line',
        'title' => 'Career Growth',
        'description' => 'Clear career pathways and mentorship opportunities allow you to advance your skills and take on new challenges.'
    ],
    [
        'icon' => 'fas fa-user-friends',
        'title' => 'Supportive Team',
        'description' => 'Join a collaborative and inclusive environment where creativity and individual expression are valued.'
    ],
    [
        'icon' => 'fas fa-award',
        'title' => 'Recognition & Rewards',
        'description' => 'Competitive compensation, performance bonuses, and employee recognition programs to celebrate your achievements.'
    ]
];

// Culture section paragraphs
$culture_paragraphs = [
    'At The Leading Edge, we foster a culture of creativity, respect, and continuous growth. We believe that happy team members provide the best service to our clients, which is why we prioritize creating a positive and supportive work environment.',
    'We celebrate diversity and believe that each team member brings unique perspectives and talents that contribute to our collective success. Our collaborative approach encourages sharing ideas and learning from one another.',
    'If you\'re passionate about beauty, dedicated to excellence, and love making people feel their best, we\'d love to hear from you!'
];

// Include meta/head section
include 'components/meta.php';
?>

<?php include 'components/header.php'; ?>

<main>
    <div class="careers-page">
        <!-- Page Header -->
        <section class="page-header">
            <div class="container">
                <h1>Join Our Team</h1>
                <div class="separator"></div>
                <p>Be part of The Leading Edge family and grow your career with us</p>
            </div>
        </section>

        <!-- Benefits Section -->
        <section class="why-join-section">
            <div class="container">
                <div class="section-header text-center">
                    <h2>Why Join The Leading Edge?</h2>
                    <p>At The Leading Edge, we believe in nurturing talent and providing our team members with the tools and environment they need to thrive.</p>
                </div>
                
                <div class="benefits-grid">
                    <?php foreach ($benefits as $benefit): ?>
                    <div class="benefit-item">
                        <div class="icon">
                            <i class="<?php echo $benefit['icon']; ?>"></i>
                        </div>
                        <h3><?php echo $benefit['title']; ?></h3>
                        <p><?php echo $benefit['description']; ?></p>
                    </div>
                    <?php endforeach; ?>
                </div>
            </div>
        </section>

        <!-- Jobs Grid -->
        <section class="openings-section">
            <div class="container">
                <div class="section-header text-center">
                    <h2>Current Openings</h2>
                    <p>Explore our current job opportunities and find the perfect role for your skills and passion.</p>
                </div>
                
                <div class="positions-grid">
                    <?php foreach ($positions as $position): ?>
                    <div class="position-card" data-position-id="<?php echo $position['id']; ?>">
                        <h3><?php echo $position['title']; ?></h3>
                        <div class="position-meta">
                            <span class="type"><?php echo $position['type']; ?></span>
                            <span class="location">
                                <i class="fas fa-map-marker-alt"></i>
                                <?php echo $position['location']; ?>
                            </span>
                        </div>
                        <p class="position-excerpt"><?php echo substr($position['description'], 0, 120) . '...'; ?></p>
                        <button class="btn btn-primary" onclick="showPositionDetails(<?php echo $position['id']; ?>)">View Details</button>
                    </div>
                    <?php endforeach; ?>
                </div>
            </div>
        </section>

        <!-- Application Form -->
        <section id="application-form" class="application-section">
            <div class="container">
                <div class="section-header text-center">
                    <h2>Apply Now</h2>
                    <p>Interested in joining our team? Fill out the application form below and we'll be in touch.</p>
                </div>
                
                <div class="application-form-container">
                    <form class="application-form" onsubmit="handleApplicationSubmit(event)">
                        <div class="form-group">
                            <label for="name">Full Name *</label>
                            <input type="text" id="name" name="name" placeholder="Your full name" required>
                        </div>
                        
                        <div class="form-group">
                            <label for="email">Email Address *</label>
                            <input type="email" id="email" name="email" placeholder="Your email address" required>
                        </div>
                        
                        <div class="form-group">
                            <label for="phone">Phone Number *</label>
                            <input type="tel" id="phone" name="phone" placeholder="Your phone number" required>
                        </div>
                        
                        <div class="form-group">
                            <label for="position">Position of Interest *</label>
                            <select id="position" name="position" required>
                                <option value="">Select a position</option>
                                <?php foreach ($positions as $position): ?>
                                <option value="<?php echo $position['title']; ?>"><?php echo $position['title']; ?></option>
                                <?php endforeach; ?>
                                <option value="other">Other/Future Opportunities</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label for="experience">Years of Experience *</label>
                            <select id="experience" name="experience" required>
                                <option value="">Select experience level</option>
                                <option value="0-1">Less than 1 year</option>
                                <option value="1-3">1-3 years</option>
                                <option value="3-5">3-5 years</option>
                                <option value="5+">5+ years</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label for="message">Why do you want to join our team?</label>
                            <textarea id="message" name="message" placeholder="Tell us about yourself and why you'd like to join The Leading Edge" rows="4"></textarea>
                        </div>
                        
                        <div class="form-group">
                            <label for="resume">Upload CV/Resume (Optional)</label>
                            <div class="file-upload">
                                <input type="file" id="resume" name="resume" accept=".pdf,.doc,.docx">
                                <p class="file-info">PDF or Word document (max 5MB)</p>
                            </div>
                        </div>
                        
                        <button type="submit" class="btn primary">Submit Application</button>
                    </form>
                </div>
            </div>
        </section>

        <!-- Culture Section -->
        <section class="culture-section">
            <div class="container">
                <div class="culture-content">
                    <div class="culture-text">
                        <h2>Our Workplace Culture</h2>
                        <?php foreach ($culture_paragraphs as $index => $paragraph): ?>
                        <p<?php echo $index === count($culture_paragraphs) - 1 ? ' class="last-child"' : ''; ?>><?php echo $paragraph; ?></p>
                        <?php endforeach; ?>
                    </div>
                    
                    <div class="culture-image"></div>
                </div>
            </div>
        </section>
    </div>

    <!-- Position Details Modal -->
    <div id="position-modal" class="modal">
        <div class="modal-content position-modal-content">
            <div class="modal-header">
                <h3 id="modal-position-title"></h3>
                <button class="modal-close" onclick="closePositionDetails()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <div class="position-detail">
                    <div class="position-meta">
                        <span id="modal-position-type" class="type"></span>
                        <span id="modal-position-location" class="location">
                            <i class="fas fa-map-marker-alt"></i>
                            <span></span>
                        </span>
                    </div>
                    <div class="position-description">
                        <p id="modal-position-description"></p>
                    </div>
                    <div class="position-responsibilities">
                        <h4>Key Responsibilities</h4>
                        <ul id="modal-position-responsibilities"></ul>
                    </div>
                    <div class="position-requirements">
                        <h4>Requirements</h4>
                        <ul id="modal-position-requirements"></ul>
                    </div>
                    <div class="modal-actions">
                        <a href="#application-form" class="btn btn-primary" onclick="closePositionDetails()">Apply Now</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>

<!-- Pass positions data to JavaScript -->
<script>
window.positionsData = <?php echo json_encode($positions); ?>;
</script>

<?php include 'components/footer.php'; ?>

<?php include 'components/scripts.php'; ?>
