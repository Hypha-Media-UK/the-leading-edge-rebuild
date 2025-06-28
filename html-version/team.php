<?php
// Include configuration
require_once 'includes/config.php';

// Page-specific variables
$current_page = 'team';
$page_title = 'Meet Our Team - ' . $site_name;
$page_description = 'Meet the talented professionals at The Leading Edge salon in Hyde, Cheshire. Our skilled team of stylists, nail technicians, and beauty therapists are dedicated to your beauty journey.';
$page_css = 'team';
$page_js = 'team';

// Team members data
$team_members = [
    [
        'id' => 10,
        'name' => 'Alan',
        'role' => 'Marketing Director',
        'bio' => 'Alan brings creative vision and exceptional technical skill to our makeup services. With a background in fashion and editorial work, Alex specializes in creating personalized looks that enhance each client\'s natural beauty while reflecting their individual style and personality.',
        'specialties' => ['Bridal Makeup', 'Editorial Looks', 'Special Effects'],
        'image' => 'images/new/staff/staff10.webp',
        'instagram' => '@alexjohnsonmakeup'
    ],
    [
        'id' => 4,
        'name' => 'Carolyn',
        'role' => 'Finance Director',
        'bio' => 'Carolyn\'s passion for hair began at a young age, and he\'s spent the last decade perfecting his craft. His work has been featured in leading fashion magazines, and he brings his editorial expertise to every client\'s experience.',
        'specialties' => ['Editorial Styling', 'Hair Extensions', 'Curly Hair Specialist'],
        'image' => 'images/new/staff/staff4.webp',
        'instagram' => '@oliverbaker'
    ],
    [
        'id' => 1,
        'name' => 'Abigail',
        'role' => 'Stylist',
        'bio' => 'With over 15 years in the industry, Abigail founded The Leading Edge with a vision to create a salon that combines luxury with exceptional skill. Her expertise in hair color transformations and cutting-edge styling techniques has earned her numerous industry awards.',
        'specialties' => ['Hair Color Transformation', 'Precision Cutting', 'Bridal Styling'],
        'image' => 'images/new/staff/staff1.webp',
        'instagram' => '@emmathompson'
    ],
    [
        'id' => 2,
        'name' => 'Nina',
        'role' => 'Nail Technician',
        'bio' => 'Nina brings a wealth of international experience to our team, having trained in Paris, New York, and London. His innovative approach to hair styling and dedication to understanding each client\'s unique needs has made him a favorite among our regulars.',
        'specialties' => ['Avant-garde Styling', 'Men\'s Grooming', 'Texture Specialist'],
        'image' => 'images/new/staff/staff2.webp',
        'instagram' => '@jameswilson'
    ],
    [
        'id' => 3,
        'name' => 'Natasha',
        'role' => 'Gel Nail Technician',
        'bio' => 'Sophia is our in-house color expert, known for her ability to create the perfect shade for every skin tone. Her background in chemistry gives her a unique understanding of hair color science, ensuring beautiful, long-lasting results.',
        'specialties' => ['Balayage', 'Color Correction', 'Fashion Colors'],
        'image' => 'images/new/staff/staff3.webp',
        'instagram' => '@sophiachen'
    ],
    [
        'id' => 5,
        'name' => 'Lauren',
        'role' => 'Stylist',
        'bio' => 'Lauren is our senior beauty therapist with extensive training in skincare and holistic treatments. Her nurturing approach and technical expertise ensure that every client leaves feeling relaxed and rejuvenated.',
        'specialties' => ['Facial Treatments', 'Brow Artistry', 'Lash Extensions'],
        'image' => 'images/new/staff/staff5.webp',
        'instagram' => '@zoemartinez'
    ],
    [
        'id' => 6,
        'name' => 'Jayne',
        'role' => 'Stylist',
        'bio' => 'Jayne\'s artistic background is evident in his detailed nail art and precise technique. His passion for nail health and beautiful designs has earned him a loyal client base and recognition in the industry.',
        'specialties' => ['Nail Art', 'Gel Extensions', 'Hand Treatments'],
        'image' => 'images/new/staff/staff6.webp',
        'instagram' => '@nathanpatel'
    ],
    [
        'id' => 7,
        'name' => 'Hayley',
        'role' => 'Stylist',
        'bio' => 'Hayley specializes in advanced aesthetic treatments, combining cutting-edge technology with traditional techniques. Her extensive knowledge of skin biology and aging processes allows her to create customized treatment plans for each client.',
        'specialties' => ['Micro-needling', 'Chemical Peels', 'Skin Rejuvenation'],
        'image' => 'images/new/staff/staff7.webp',
        'instagram' => '@oliviareynolds'
    ],
    [
        'id' => 8,
        'name' => 'Gary',
        'role' => 'Stylist',
        'bio' => 'Gary brings a wealth of international experience to our team, having trained in Paris, New York, and London. His innovative approach to hair styling and dedication to understanding each client\'s unique needs has made him a favorite among our regulars.',
        'specialties' => ['Deep Tissue Massage', 'Hot Stone Therapy', 'Sports Recovery'],
        'image' => 'images/new/staff/staff8.webp',
        'instagram' => '@michaelchang'
    ],
    [
        'id' => 9,
        'name' => 'Emily',
        'role' => 'Stylist',
        'bio' => 'Emily brings a wealth of international experience to our team, having trained in Paris, New York, and London. His innovative approach to hair styling and dedication to understanding each client\'s unique needs has made him a favorite among our regulars.',
        'specialties' => ['Modern Cuts', 'Blow Dry Styling', 'Natural Highlights'],
        'image' => 'images/new/staff/staff9.webp',
        'instagram' => '@isabellamoore'
    ]
];

// Team values data
$team_values = [
    [
        'title' => 'Continuous Education',
        'description' => 'Our team regularly attends workshops, training sessions, and industry events to stay at the forefront of the latest techniques and trends.',
        'icon' => 'fas fa-graduation-cap'
    ],
    [
        'title' => 'Collaboration',
        'description' => 'We believe in the power of teamwork and often collaborate on client services to ensure the best possible results for every individual.',
        'icon' => 'fas fa-handshake'
    ],
    [
        'title' => 'Passion for Service',
        'description' => 'Our team members are selected not just for their technical skills, but for their genuine passion for making clients feel beautiful and confident.',
        'icon' => 'fas fa-heart'
    ]
];

// Include meta/head section
include 'components/meta.php';
?>

<?php include 'components/header.php'; ?>

<main>
    <div class="team-page">
        <!-- Page Header -->
        <section class="page-header">
            <div class="container">
                <div class="page-header-content">
                    <h1>Meet Our Team</h1>
                    <p>The heart and soul of The Leading Edge – our talented professionals dedicated to your beauty journey</p>
                </div>
            </div>
        </section>

        <!-- Team Grid -->
        <section class="team-grid-section section">
            <div class="container">
                <div class="team-grid">
                    <?php foreach ($team_members as $member): ?>
                    <div class="team-member-card" data-member-id="<?php echo $member['id']; ?>">
                        <div class="member-image">
                            <img src="<?php echo $member['image']; ?>" alt="<?php echo $member['name']; ?>">
                            <div class="member-overlay">
                                <button class="view-details-btn" onclick="openTeamMemberModal(<?php echo $member['id']; ?>)">
                                    <i class="fas fa-plus"></i>
                                    <span>View Details</span>
                                </button>
                            </div>
                        </div>
                        <div class="member-info">
                            <h3><?php echo $member['name']; ?></h3>
                            <p class="member-role"><?php echo $member['role']; ?></p>
                        </div>
                    </div>
                    <?php endforeach; ?>
                </div>
            </div>
        </section>

        <!-- Team Values Section -->
        <section class="team-values-section section">
            <div class="container">
                <div class="section-header text-center">
                    <h2>Our Team Values</h2>
                </div>
                <div class="values-grid">
                    <?php foreach ($team_values as $value): ?>
                    <div class="value-item">
                        <div class="value-icon">
                            <i class="<?php echo $value['icon']; ?>"></i>
                        </div>
                        <h3><?php echo $value['title']; ?></h3>
                        <p><?php echo $value['description']; ?></p>
                    </div>
                    <?php endforeach; ?>
                </div>
            </div>
        </section>

        <!-- Join Our Team CTA -->
        <section class="join-team-cta section" style="background-color: #ffffff;">
            <div class="container">
                <div class="cta-content text-center">
                    <h2>Interested in Joining Our Team?</h2>
                    <p>We're always looking for talented and passionate professionals to join The Leading Edge family. If you're dedicated to excellence and love what you do, we'd love to hear from you.</p>
                    <a href="careers.php" class="btn btn-primary">View Careers</a>
                </div>
            </div>
        </section>
    </div>

    <!-- Team Member Modal -->
    <div id="team-member-modal" class="modal">
        <div class="modal-content">
            <div class="modal-header">
                <button class="modal-close" onclick="closeTeamMemberModal()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <div class="member-details">
                    <div class="member-photo">
                        <img id="modal-member-image" src="" alt="">
                    </div>
                    <div class="member-info">
                        <h2 id="modal-member-name"></h2>
                        <p id="modal-member-role" class="member-role"></p>
                        <p id="modal-member-bio" class="member-bio"></p>
                        <div class="member-specialties">
                            <h4>Specialties:</h4>
                            <ul id="modal-member-specialties"></ul>
                        </div>
                        <div class="member-social">
                            <a id="modal-member-instagram" href="#" target="_blank" class="social-link">
                                <i class="fab fa-instagram"></i>
                                <span id="modal-instagram-handle"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>

<!-- Pass team member data to JavaScript -->
<script>
window.teamMembersData = <?php echo json_encode($team_members); ?>;
</script>

<?php include 'components/footer.php'; ?>

<?php include 'components/scripts.php'; ?>
