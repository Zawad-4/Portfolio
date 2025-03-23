interface FormData {
  name: string;
  email: string;
  message: string;
}

export const handleSubmit = async (event: React.FormEvent<HTMLFormElement>, formData: FormData) => {
  event.preventDefault();
  
  try {
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Clear form
    const form = event.target as HTMLFormElement;
    form.reset();
    
    alert('Message sent successfully!');
  } catch (error) {
    console.error('Error sending message:', error);
    alert('Failed to send message. Please try again.');
  }
};