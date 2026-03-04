const offers = [
  {
    title: 'High-Ticket Course Creation Playbook',
    seller: 'Ava L.',
    rating: '4.9',
    reviews: 312,
    price: '$45'
  },
  {
    title: 'Audio Series: Productivity for Entrepreneurs',
    seller: 'Noah K.',
    rating: '5.0',
    reviews: 184,
    price: '$29'
  },
  {
    title: 'Bestselling eBook Launch Framework',
    seller: 'Mila D.',
    rating: '4.8',
    reviews: 267,
    price: '$35'
  }
];

const offerGrid = document.getElementById('offerGrid');

offers.forEach((offer) => {
  const card = document.createElement('article');
  card.className = 'offer-card';
  card.innerHTML = `
    <p class="eyebrow">${offer.seller}</p>
    <h3>${offer.title}</h3>
    <div class="offer-meta">
      <span>⭐ ${offer.rating} (${offer.reviews})</span>
      <strong>${offer.price}</strong>
    </div>
    <button class="btn primary">View Details</button>
  `;

  offerGrid.appendChild(card);
});
