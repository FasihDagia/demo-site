const order_btn = document.getElementById('order-now');
order_btn.addEventListener('click', () => {
    const phoneNumber = '+92300-0000000';
    window.location.href = `tel:${phoneNumber}`;
});

const reserve_btn = document.getElementById('reserve-now');
reserve_btn.addEventListener('click', () => {
    const phoneNumber = '+92300-0000000';
    window.location.href = `tel:${phoneNumber}`;
});