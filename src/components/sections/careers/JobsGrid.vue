<template>
  <section class="jobs-section">
    <div class="container">
      <SectionHeader 
        :title="title" 
        :description="description"
      />
      
      <div 
        class="search-filters"
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { delay: 200, duration: 600 } }"
      >
        <div class="search-bar">
          <i class="fas fa-search"></i>
          <input 
            type="text" 
            v-model="searchQuery" 
            placeholder="Search positions..." 
            @input="$emit('search', searchQuery)"
          >
        </div>
        
        <div v-if="jobTypes && jobTypes.length" class="job-type-filter">
          <select 
            v-model="selectedType"
            @change="$emit('filter-change', selectedType)"
          >
            <option value="">All Job Types</option>
            <option v-for="type in jobTypes" :key="type" :value="type">{{ type }}</option>
          </select>
        </div>
      </div>
      
      <div v-if="filteredJobs.length === 0" class="no-jobs">
        <p>No jobs match your current filters. Please try different search criteria.</p>
      </div>
      
      <div v-else class="jobs-list">
        <JobListingCard
          v-for="(job, index) in filteredJobs"
          :key="job.id"
          :id="job.id"
          :title="job.title"
          :jobType="job.jobType"
          :location="job.location"
          :excerpt="job.excerpt"
          :description="job.description"
          :requirements="job.requirements"
          :benefits="job.benefits"
          :isExpanded="expandedJobId === job.id"
          :delay="200 + (index * 150)"
          @expand="expandJob"
          @collapse="collapseJob"
          @apply="$emit('apply-job', $event)"
        />
      </div>
      
      <div 
        v-if="showApplyInfo"
        class="apply-info"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      >
        <h3>How to Apply</h3>
        <p>To apply for any of our positions, please email your CV and a cover letter to <a href="mailto:careers@leadingedgehairandbeauty.co.uk">careers@leadingedgehairandbeauty.co.uk</a>, or drop by our salon with your details.</p>
        <p>Please specify the position you're applying for in the subject line.</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import SectionHeader from '@/components/ui/SectionHeader.vue';
import JobListingCard from '@/components/ui/JobListingCard.vue';

const props = defineProps({
  title: {
    type: String,
    default: 'Current Job Openings'
  },
  description: {
    type: String,
    default: 'Join our talented team of professionals in our award-winning salon'
  },
  jobs: {
    type: Array,
    required: true
  },
  jobTypes: {
    type: Array,
    default: () => ['Full-time', 'Part-time', 'Contract', 'Internship']
  },
  showApplyInfo: {
    type: Boolean,
    default: true
  }
});

const emit = defineEmits(['search', 'filter-change', 'apply-job']);

const searchQuery = ref('');
const selectedType = ref('');
const expandedJobId = ref(null);

// Filtered jobs based on search and type
const filteredJobs = computed(() => {
  let filtered = props.jobs;
  
  // Filter by type
  if (selectedType.value) {
    filtered = filtered.filter(job => job.jobType === selectedType.value);
  }
  
  // Filter by search term
  if (searchQuery.value.trim()) {
    const query = searchQuery.value.toLowerCase();
    filtered = filtered.filter(job => 
      job.title.toLowerCase().includes(query) || 
      job.excerpt.toLowerCase().includes(query) ||
      (job.description && job.description.toLowerCase().includes(query))
    );
  }
  
  return filtered;
});

// Function to expand a job
const expandJob = (jobId) => {
  expandedJobId.value = jobId;
};

// Function to collapse a job
const collapseJob = () => {
  expandedJobId.value = null;
};
</script>

<style lang="scss" scoped>
.jobs-section {
  padding: 5rem 0;
  background-color: $light-color;
  
  .search-filters {
    display: flex;
    justify-content: space-between;
    margin-bottom: 3rem;
    
    .search-bar {
      flex: 1;
      max-width: 500px;
      position: relative;
      
      i {
        position: absolute;
        left: 1rem;
        top: 50%;
        transform: translateY(-50%);
        color: custom-lighten($primary-color, 30%);
      }
      
      input {
        width: 100%;
        padding: 0.8rem 1rem 0.8rem 2.5rem;
        border: 1px solid rgba($primary-color, 0.1);
        border-radius: 4px;
        font-size: 1rem;
        
        &:focus {
          outline: none;
          border-color: $accent-color;
        }
      }
    }
    
    .job-type-filter {
      select {
        padding: 0.8rem 1rem;
        border: 1px solid rgba($primary-color, 0.1);
        border-radius: 4px;
        font-size: 1rem;
        background-color: white;
        cursor: pointer;
        
        &:focus {
          outline: none;
          border-color: $accent-color;
        }
      }
    }
    
    @media (max-width: 768px) {
      flex-direction: column;
      gap: 1rem;
      
      .search-bar {
        max-width: 100%;
      }
    }
  }
  
  .no-jobs {
    background-color: white;
    padding: 2rem;
    border-radius: 8px;
    text-align: center;
    box-shadow: 0 5px 20px rgba($primary-color, 0.08);
    
    p {
      color: custom-lighten($primary-color, 20%);
    }
  }
  
  .jobs-list {
    margin-bottom: 3rem;
  }
  
  .apply-info {
    background-color: white;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 5px 20px rgba($primary-color, 0.08);
    text-align: center;
    
    h3 {
      font-size: 1.4rem;
      margin-bottom: 1rem;
      color: $primary-color;
    }
    
    p {
      color: custom-lighten($primary-color, 20%);
      line-height: 1.6;
      margin-bottom: 1rem;
      
      &:last-child {
        margin-bottom: 0;
      }
    }
    
    a {
      color: $accent-color;
      font-weight: 600;
      text-decoration: none;
      
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
