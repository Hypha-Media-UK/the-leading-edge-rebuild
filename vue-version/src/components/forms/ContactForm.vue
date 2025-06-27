<template>
  <div class="form-header">
    <h2>{{ title }}</h2>
    <p>{{ subtitle }}</p>
  </div>

  <div v-if="formSubmitted" class="form-success">
    <div class="success-icon">
      <i class="fas fa-check-circle"></i>
    </div>
    <h3>Thank You!</h3>
    <p>Your appointment request has been received. We'll contact you shortly to confirm your booking.</p>
    <Button @click="resetForm" variant="primary">{{ resetButtonText }}</Button>
  </div>

  <form v-else @submit.prevent="submitForm" class="contact-form">
    <FormField
      id="name"
      label="Full Name"
      v-model="form.name"
      :placeholder="placeholders.name || 'Your full name'"
      :error="errors.name"
      required
    />

    <FormField
      id="email"
      label="Email Address"
      type="email"
      v-model="form.email"
      :placeholder="placeholders.email || 'Your email address'"
      :error="errors.email"
      required
    />

    <FormField
      id="phone"
      label="Phone Number"
      type="tel"
      v-model="form.phone"
      :placeholder="placeholders.phone || 'Your phone number'"
      :error="errors.phone"
      required
    />

    <FormField
      id="service"
      label="Service"
      type="select"
      v-model="form.service"
      :placeholder="placeholders.service || 'Select a service'"
      :options="serviceOptions"
      :error="errors.service"
      required
    />

    <div class="form-row">
      <FormField
        id="date"
        label="Preferred Date"
        type="date"
        v-model="form.date"
        :error="errors.date"
        required
      />

      <FormField
        id="time"
        label="Preferred Time"
        type="select"
        v-model="form.time"
        :placeholder="placeholders.time || 'Select a time'"
        :options="timeOptions"
        :error="errors.time"
        required
      />
    </div>

    <FormField
      id="message"
      label="Additional Notes"
      type="textarea"
      v-model="form.message"
      :placeholder="placeholders.message || 'Tell us about any special requirements or questions'"
      :rows="4"
    />

    <div class="form-alert" v-if="formError">
      <p>{{ formErrorMessage }}</p>
    </div>

    <Button type="submit" variant="primary">{{ submitButtonText }}</Button>
  </form>
</template>

<script setup>
import { ref, reactive } from 'vue';
import FormField from '@/components/ui/FormField.vue';
import Button from '@/components/ui/Button.vue';

const props = defineProps({
  title: {
    type: String,
    default: 'Book an Appointment'
  },
  subtitle: {
    type: String,
    default: 'Fill out the form below and we\'ll get back to you within 24 hours to confirm your booking.'
  },
  submitButtonText: {
    type: String,
    default: 'Book Appointment'
  },
  resetButtonText: {
    type: String,
    default: 'Book Another Appointment'
  },
  formErrorMessage: {
    type: String,
    default: 'Please fix the errors in the form before submitting.'
  },
  serviceOptions: {
    type: Array,
    default: () => [
      { value: 'haircut', label: 'Haircut & Styling' },
      { value: 'color', label: 'Hair Color & Highlights' },
      { value: 'treatment', label: 'Hair Treatment' },
      { value: 'facial', label: 'Facial Treatment' },
      { value: 'makeup', label: 'Makeup Application' },
      { value: 'manicure', label: 'Manicure' },
      { value: 'pedicure', label: 'Pedicure' },
      { value: 'package', label: 'Spa Package' },
      { value: 'other', label: 'Other' }
    ]
  },
  timeOptions: {
    type: Array,
    default: () => [
      { value: '9:00', label: '9:00 AM' },
      { value: '10:00', label: '10:00 AM' },
      { value: '11:00', label: '11:00 AM' },
      { value: '12:00', label: '12:00 PM' },
      { value: '13:00', label: '1:00 PM' },
      { value: '14:00', label: '2:00 PM' },
      { value: '15:00', label: '3:00 PM' },
      { value: '16:00', label: '4:00 PM' },
      { value: '17:00', label: '5:00 PM' },
      { value: '18:00', label: '6:00 PM' }
    ]
  },
  placeholders: {
    type: Object,
    default: () => ({})
  }
});

const emit = defineEmits(['submit', 'reset']);

// Form data
const form = reactive({
  name: '',
  email: '',
  phone: '',
  service: '',
  message: '',
  date: '',
  time: ''
});

// Form states
const formSubmitted = ref(false);
const formError = ref(false);
const errors = reactive({});

// Form validation
const validateForm = () => {
  errors.name = '';
  errors.email = '';
  errors.phone = '';
  errors.service = '';
  errors.date = '';
  errors.time = '';
  
  if (!form.name.trim()) {
    errors.name = 'Name is required';
  }
  
  if (!form.email.trim()) {
    errors.email = 'Email is required';
  } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
    errors.email = 'Please enter a valid email address';
  }
  
  if (!form.phone.trim()) {
    errors.phone = 'Phone number is required';
  }
  
  if (!form.service) {
    errors.service = 'Please select a service';
  }
  
  if (!form.date) {
    errors.date = 'Please select a preferred date';
  }
  
  if (!form.time) {
    errors.time = 'Please select a preferred time';
  }
  
  return Object.values(errors).every(error => !error);
};

const submitForm = () => {
  if (validateForm()) {
    // Emit submit event with form data
    emit('submit', { ...form });
    
    // This would be replaced with actual API call to backend in a real implementation
    setTimeout(() => {
      formSubmitted.value = true;
    }, 1000);
  } else {
    formError.value = true;
    setTimeout(() => {
      formError.value = false;
    }, 3000);
  }
};

const resetForm = () => {
  // Reset form data
  Object.keys(form).forEach(key => {
    form[key] = '';
  });
  
  // Reset form state
  formSubmitted.value = false;
  formError.value = false;
  
  // Emit reset event
  emit('reset');
};
</script>

<style lang="scss" scoped>
.form-header {
  text-align: center;
  margin-bottom: 2rem;
  
  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: $primary-color;
  }
  
  p {
    color: custom-lighten($primary-color, 20%);
  }
}

.form-success {
  text-align: center;
  padding: 2rem;
  
  .success-icon {
    font-size: 4rem;
    color: #4CAF50;
    margin-bottom: 1rem;
  }
  
  h3 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    color: $primary-color;
  }
  
  p {
    margin-bottom: 2rem;
    color: custom-lighten($primary-color, 20%);
  }
}

.contact-form {
  .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    
    @media (max-width: 576px) {
      grid-template-columns: 1fr;
    }
  }
  
  .form-alert {
    background-color: #FFEBEE;
    color: #C62828;
    padding: 1rem;
    border-radius: 4px;
    margin-bottom: 1.5rem;
    
    p {
      margin: 0;
    }
  }
}
</style>
