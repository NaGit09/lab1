 // JavaScript functionality
 const resetForm = () => {
    document.getElementById('courseFormElement').reset();
    document.getElementById('courseId').value = '';
    document.getElementById('createdAt').value = '';
    document.getElementById('updatedAt').value = '';
    document.getElementById('formTitle').textContent = 'Create New Course';
    document.getElementById('submitButton').textContent = 'Create Course';
};

document.getElementById('courseFormElement').addEventListener('submit', (e) => {
    e.preventDefault();
    // Add course creation or update logic here
    alert('Form submitted!');
});