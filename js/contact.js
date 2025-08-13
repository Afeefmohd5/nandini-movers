$(function() {

    // WhatsApp Configuration
    const phoneNumber = '917549901768'; // Your WhatsApp number without '+'
    
    $('#sendToWhatsAppBtn').on('click', function() {
        
        // Get form values
        const userName = $('#userName').val().trim();
        const lastName = $('#userLastName').val().trim();
        const email = $('#userEmail').val().trim();
        const phone = $('#userPhone').val().trim();
        const userRequirement = $('#userRequirement').val().trim();
        
        // Enhanced validation
        if (!userName || !userRequirement) {
            alert('Please fill in your name and requirement before sending.');
            return;
        }
        
        // Create formatted message
        const message = `Hello Nandani Movers,\n\n` +
            `My name is ${userName} ${lastName || ''}.\n` +
            `📧 Email: ${email || 'Not provided'}\n` +
            `📞 Phone: ${phone || 'Not provided'}\n\n` +
            `📦 My requirement is:\n${userRequirement}\n\n` +
            `Looking forward to your response!`;
        
        // Create WhatsApp URL with proper encoding
        const encodedMessage = encodeURIComponent(message);
        const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
        
        // Open in new tab
        window.open(whatsappURL, '_blank');
    });

    // Alternative: Direct WhatsApp link for mobile devices
    $('#sendToWhatsAppBtn').on('touchstart', function() {
        // For mobile devices, use direct app opening
        const userName = $('#userName').val().trim();
        const userRequirement = $('#userRequirement').val().trim();
        
        if (userName && userRequirement) {
            const message = `Hello, I'm ${userName}. ${userRequirement}`;
            const encodedMessage = encodeURIComponent(message);
            const mobileURL = `whatsapp://send?phone=${phoneNumber}&text=${encodedMessage}`;
            
            // Try to open WhatsApp app directly on mobile
            window.location.href = mobileURL;
        }
    });

});
