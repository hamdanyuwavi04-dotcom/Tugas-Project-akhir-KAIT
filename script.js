// ===== DATA PRODUK dengan properti image =====
const PRODUCTS_DATA = [
    { id: 1, name: 'Sumatra Gayo Arabica (Green Beans)', price: 6.80, unit: 'MT', minOrder: '1 MT', stock: 120, sold: 85, rating: 4.8, reviews: 42, badge: 'Grade 1 Premium', spec: 'Kadar Air: 11-12% | Defect: < 4% | Proses: Wet Hulled', desc: 'Kopi Arabika dataran tinggi Gayo yang terkenal dengan body tebal, tingkat keasaman rendah, serta profil aroma rempah dan cokelat yang kuat.', icon: '☕', image: 'sumatra-gayo.jpg' },
    { id: 2, name: 'Pala Banda Premium (Whole Nutmeg)', price: 9.50, unit: 'KG', minOrder: '500 Kg', stock: 85, sold: 62, rating: 4.9, reviews: 38, badge: 'Sertifikasi Organik', spec: 'Kadar Air: < 10% | Ukuran: ABCD Mix | Aflatoksin: Negatif', desc: 'Pala asli kepulauan Banda dengan kualitas ekspor terbaik tanpa jamur, memiliki kandungan minyak atsiri tinggi dan aroma aromatik yang tajam.', icon: '🟤', image: 'pala-banda.jpg' },
    { id: 3, name: 'Cengkeh Maluku (Premium Dried Cloves)', price: 8.20, unit: 'MT', minOrder: '1 MT', stock: 60, sold: 43, rating: 4.7, reviews: 29, badge: 'Ekstra Kering', spec: 'Kadar Air: < 12% | Benda Asing: < 0.5% | Warna: Cokelat Mengkilap', desc: 'Cengkeh kering pilihan dari Maluku yang diproses secara alami di bawah sinar matahari. Memiliki tangkai kokoh, wangi intens, dan kadar eugenol tinggi.', icon: '🍂', image: 'cengkeh-maluku.jpg' },
    { id: 4, name: 'Lada Hitam Lampung (Black Pepper)', price: 4.50, unit: 'MT', minOrder: '1 MT', stock: 200, sold: 210, rating: 4.5, reviews: 51, badge: 'ASTA Quality', spec: 'Kadar Air: < 12% | Density: 550-600 g/l | Minyak Atsiri: > 2%', desc: 'Lada hitam khas Lampung dengan tingkat kepedasan tajam (piperin tinggi). Diproses melalui pencucian higienis standar ASTA.', icon: '⚫', image: 'lada-hitam.jpg' },
    { id: 5, name: 'Lada Putih Muntok (White Pepper)', price: 6.20, unit: 'MT', minOrder: '1 MT', stock: 95, sold: 78, rating: 4.6, reviews: 33, badge: 'Double Washed', spec: 'Kadar Air: < 13% | Warna: Putih Krem Bersih | Piperin: > 5%', desc: 'Muntok White Pepper yang terkenal di pasar Eropa. Melewati proses perendaman air mengalir murni menghasilkan lada beraroma khas tanpa bau apek.', icon: '⚪', image: 'lada-putih.jpg' },
    { id: 6, name: 'Vanili Planifolia Alor (Vanilla Beans)', price: 140.00, unit: 'KG', minOrder: '10 Kg', stock: 40, sold: 28, rating: 4.9, reviews: 27, badge: 'Gourmet Grade A', spec: 'Kadar Air: 25-30% | Panjang: 15-20 cm | Vanillin: 2.0-2.5%', desc: 'Polong vanili utuh nan eksotis dari Nusa Tenggara Timur. Tekstur fleksibel, berminyak, dengan profil rasa sweet, creamy, dan kompleks.', icon: '🌿', image: 'vanili-alor.jpg' },
    { id: 7, name: 'Kayu Manis Kerinci (Cassia Vera)', price: 5.80, unit: 'MT', minOrder: '1 MT', stock: 75, sold: 55, rating: 4.4, reviews: 22, badge: 'Grade AA Stick', spec: 'Kadar Air: < 12% | Panjang: 8-10 cm / potong | Minyak Atsiri: > 2.5%', desc: 'Kayu manis Cassia dari dataran tinggi Gunung Kerinci, Jambi. Dipanen dari pohon berusia di atas 10 tahun untuk rasa manis pedas optimal.', icon: '🪵', image: 'kayu-manis.jpg' },
    { id: 8, name: 'Toraja Sapan Arabica (Green Beans)', price: 7.20, unit: 'MT', minOrder: '1 MT', stock: 50, sold: 37, rating: 4.8, reviews: 19, badge: 'Specialty Grade', spec: 'Kadar Air: 11% | Ketinggian: 1400-1800 mdpl | Cupping Score: 84+', desc: 'Biji kopi eksklusif dari lereng Sapan, Toraja. Dikenal di Jepang dan Eropa akan profil rasa cokelat hitam, karamel, dengan acidity berry segar.', icon: '⛰️', image: 'toraja-sapan.jpg' },
    { id: 9, name: 'Kapulaga Jawa (White Cardamom)', price: 12.00, unit: 'KG', minOrder: '500 Kg', stock: 110, sold: 92, rating: 4.3, reviews: 16, badge: 'Sun Dried', spec: 'Kadar Air: < 14% | Warna: Putih Gading | Benda Asing: < 1%', desc: 'Kapulaga lokal (Amomum compactum) yang dikeringkan matahari. Esensial untuk farmasi, jamu tradisional, dan masakan Timur Tengah.', icon: '🌱', image: 'kapulaga-jawa.jpg' },
    { id: 10, name: 'Jahe Gajah (Fresh/Dried Elephant Ginger)', price: 1.80, unit: 'MT', minOrder: '5 MT', stock: 300, sold: 156, rating: 4.2, reviews: 14, badge: 'Big Rhizome', spec: 'Ukuran: 150g - 300g up | Proses: Washed & Cleaned | Kemasan: Mesh Bag 30kg', desc: 'Rimpang jahe berukuran besar, daging rimpang lebih lunak, dan rasa tidak terlalu pedas. Cocok untuk minuman, ekstrak makanan, atau konsumsi segar.', icon: '🫚', image: 'jahe-gajah.jpg' }
];

// ============================================================
// STATE
// ============================================================
let products = JSON.parse(JSON.stringify(PRODUCTS_DATA));
let cart = [];
let currentPage = 'home';
let currentPageProducts = 1;
const ITEMS_PER_PAGE = 6;

// ===== DOM REFS =====
const grid = document.getElementById('productsGrid');
const searchInput = document.getElementById('searchInput');
const filterRating = document.getElementById('filterRating');
const sortSelect = document.getElementById('sortSelect');
const catalogResult = document.getElementById('catalogResult');
const pagination = document.getElementById('pagination');
const cartItems = document.getElementById('cartItems');
const cartTotalValue = document.getElementById('cartTotalValue');
const clearCartBtn = document.getElementById('clearCartBtn');
const selectedCommodityInput = document.getElementById('selectedCommodity');
const orderQuantityInput = document.getElementById('orderQuantity');
const quantityUnitInput = document.getElementById('quantityUnit');
const summaryItemCount = document.getElementById('summaryItemCount');
const summaryTotalValue = document.getElementById('summaryTotalValue');
const adminTableBody = document.getElementById('adminTableBody');
const adminStatus = document.getElementById('adminStatus');
const adminResetBtn = document.getElementById('adminResetStockBtn');
const adminTotalProducts = document.getElementById('adminTotalProducts');
const adminTotalStock = document.getElementById('adminTotalStock');
const adminLowStock = document.getElementById('adminLowStock');
const toastContainer = document.getElementById('toastContainer');
const breadcrumbText = document.getElementById('breadcrumbText');
const navLinks = document.querySelectorAll('.nav-link[data-page]');
const mobileToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.getElementById('navMenu');

// ===== STORAGE =====
function saveStockToLocalStorage() {
    const stockMap = {};
    const soldMap = {};
    products.forEach(p => {
        stockMap[p.id] = p.stock;
        soldMap[p.id] = p.sold;
    });
    try {
        localStorage.setItem('nax_stock_data', JSON.stringify(stockMap));
        localStorage.setItem('nax_sold_data', JSON.stringify(soldMap));
    } catch (e) {}
}

function loadStockFromLocalStorage() {
    try {
        const stockRaw = localStorage.getItem('nax_stock_data');
        const soldRaw = localStorage.getItem('nax_sold_data');
        if (stockRaw) {
            const stockMap = JSON.parse(stockRaw);
            products.forEach(p => {
                if (stockMap[p.id] !== undefined) p.stock = stockMap[p.id];
            });
        }
        if (soldRaw) {
            const soldMap = JSON.parse(soldRaw);
            products.forEach(p => {
                if (soldMap[p.id] !== undefined) p.sold = soldMap[p.id];
            });
        }
    } catch (e) {}
}

function saveCartToLocalStorage() {
    try { localStorage.setItem('nax_cart', JSON.stringify(cart)); } catch (e) {}
}

function loadCartFromLocalStorage() {
    try {
        const raw = localStorage.getItem('nax_cart');
        if (raw) cart = JSON.parse(raw);
    } catch (e) {}
}

// ===== TOAST =====
function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    toastContainer.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(40px)';
        setTimeout(() => toast.remove(), 400);
    }, 3500);
}

// ===== CART =====
function addToCart(productId) {
    const p = products.find(prod => prod.id === productId);
    if (!p) return;
    if (p.stock <= 0) {
        showToast('⛔ Stok habis!', 'error');
        return;
    }
    const existing = cart.find(item => item.productId === productId);
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ productId, qty: 1 });
    }
    saveCartToLocalStorage();
    renderCart();
    showToast(`✅ ${p.name} ditambahkan ke keranjang`, 'success');
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.productId !== productId);
    saveCartToLocalStorage();
    renderCart();
}

function clearCart() {
    if (cart.length === 0) return;
    cart = [];
    saveCartToLocalStorage();
    renderCart();
    showToast('🗑️ Keranjang dikosongkan.', 'info');
}

function renderCart() {
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="cart-empty">Belum ada produk dipilih.</p>';
        cartTotalValue.textContent = '$0.00';
        summaryItemCount.textContent = '0';
        summaryTotalValue.textContent = '$0.00';
        selectedCommodityInput.value = 'Tambahkan produk dari katalog';
        return;
    }
    let html = '';
    let total = 0;
    let itemCount = 0;
    let commodityNames = [];
    cart.forEach(item => {
        const p = products.find(prod => prod.id === item.productId);
        if (!p) return;
        const subtotal = p.price * (p.unit === 'MT' ? item.qty * 1000 : item.qty);
        total += subtotal;
        itemCount += item.qty;
        commodityNames.push(`${p.name} (${item.qty} ${p.unit})`);
        html += `
            <div class="cart-item">
                <span class="item-info">${p.name} × ${item.qty} ${p.unit}</span>
                <span class="item-price">$${subtotal.toFixed(2)}</span>
                <button class="item-remove" onclick="removeFromCart(${p.id})">&times;</button>
            </div>
        `;
    });
    cartItems.innerHTML = html;
    cartTotalValue.textContent = `$${total.toFixed(2)}`;
    summaryItemCount.textContent = itemCount;
    summaryTotalValue.textContent = `$${total.toFixed(2)}`;
    selectedCommodityInput.value = commodityNames.join('; ') || 'Tambahkan produk dari katalog';
}

clearCartBtn.addEventListener('click', clearCart);

// ===== RENDER PRODUCTS =====
function renderProducts() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    const ratingFilter = filterRating.value;
    const sortKey = sortSelect.value;

    let filtered = products.filter(p => {
        const matchName = p.name.toLowerCase().includes(searchTerm);
        let matchRating = true;
        if (ratingFilter === '4') matchRating = p.rating >= 4.0;
        else if (ratingFilter === '4.5') matchRating = p.rating >= 4.5;
        return matchName && matchRating;
    });

    switch (sortKey) {
        case 'name-asc': filtered.sort((a, b) => a.name.localeCompare(b.name)); break;
        case 'name-desc': filtered.sort((a, b) => b.name.localeCompare(a.name)); break;
        case 'price-asc': filtered.sort((a, b) => a.price - b.price); break;
        case 'price-desc': filtered.sort((a, b) => b.price - a.price); break;
        case 'rating-desc': filtered.sort((a, b) => b.rating - a.rating); break;
        case 'sold-desc': filtered.sort((a, b) => b.sold - a.sold); break;
        case 'stock-desc': filtered.sort((a, b) => b.stock - a.stock); break;
        default: break;
    }

    catalogResult.textContent = `Menampilkan ${filtered.length} dari ${products.length} produk`;

    const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
    if (currentPageProducts > totalPages) currentPageProducts = 1;
    const start = (currentPageProducts - 1) * ITEMS_PER_PAGE;
    const pageItems = filtered.slice(start, start + ITEMS_PER_PAGE);

    if (pageItems.length === 0) {
        grid.innerHTML = `<div class="no-products" style="grid-column:1/-1; text-align:center; padding:40px 20px; color:var(--text-muted);">
            <span style="font-size:40px; display:block; margin-bottom:12px;">🔍</span>
            <h3 style="font-family:'Playfair Display',serif; font-size:20px;">Tidak ada produk yang ditemukan</h3>
            <p>Coba ubah kata kunci atau filter pencarian Anda.</p>
        </div>`;
        pagination.innerHTML = '';
        return;
    }

    grid.innerHTML = pageItems.map(p => {
        const stars = '★'.repeat(Math.floor(p.rating)) + (p.rating % 1 >= 0.5 ? '½' : '') + '☆'.repeat(5 - Math.ceil(p.rating));
        const stockStatus = p.stock <= 0 ? 'out' : p.stock < 10 ? 'low' : 'normal';
        const stockLabel = p.stock <= 0 ? 'Stok Habis' : p.stock < 10 ? 'Stok Terbatas' : `${p.stock} ${p.unit}`;
        const soldDisplay = p.sold >= 1000 ? `${Math.floor(p.sold/1000)}rb+` : p.sold >= 100 ? `${p.sold}+` : p.sold;
        const imagePath = p.image ? `images/${p.image}` : '';

        return `
            <div class="product-card">
                <div class="product-img-container">
                    ${imagePath ? `<img src="${imagePath}" alt="${p.name}" style="width:100%; height:180px; object-fit:cover;" />` : 
                    `<div class="image-placeholder prod-img-placeholder">
                        <div class="placeholder-overlay">
                            <span class="icon">${p.icon}</span>
                            <span class="placeholder-text">${p.name}</span>
                        </div>
                    </div>`}
                    <span class="prod-badge">${p.badge}</span>
                    <span class="prod-stock-badge ${stockStatus}">${stockLabel}</span>
                </div>
                <div class="product-info">
                    <h3 class="prod-title">${p.name}</h3>
                    <div class="prod-rating-sold">
                        <span class="stars">${stars}</span>
                        <span class="rating-text">${p.rating.toFixed(1)}</span>
                        <span class="rating-text">(${p.reviews} ulasan)</span>
                        <span class="sold-text">· Terjual ${soldDisplay}</span>
                    </div>
                    <p class="prod-spec">${p.spec}</p>
                    <p class="prod-desc">${p.desc}</p>
                    <div class="prod-price-box">
                        <span class="price-label">Estimasi Harga FOB:</span>
                        <span class="price-value">USD ${p.price.toFixed(2)} / ${p.unit}</span>
                        <span class="min-order">Minimal Order: ${p.minOrder}</span>
                    </div>
                    <div class="product-actions">
                        <button class="btn-action btn-add-cart" onclick="addToCart(${p.id})" ${p.stock <= 0 ? 'disabled' : ''}>
                            ${p.stock <= 0 ? '⛔ Stok Habis' : '🛒 Tambah ke Keranjang'}
                        </button>
                        <a href="https://wa.me/6285860095139?text=Halo%20NAX,%20saya%20tertarik%20pesan%20${encodeURIComponent(p.name)}." target="_blank" class="btn-action btn-wa">💬 Pesan WA</a>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    // Pagination
    let pagHtml = '';
    for (let i = 1; i <= totalPages; i++) {
        pagHtml += `<button class="${i === currentPageProducts ? 'active' : ''}" data-page="${i}">${i}</button>`;
    }
    pagination.innerHTML = pagHtml;
    pagination.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', function() {
            currentPageProducts = parseInt(this.dataset.page);
            renderProducts();
        });
    });
}

// ===== ADMIN =====
function renderAdminPage() {
    let totalStock = 0;
    let lowStockCount = 0;
    products.forEach(p => {
        totalStock += p.stock;
        if (p.stock < 10 && p.stock > 0) lowStockCount++;
    });
    adminTotalProducts.textContent = products.length;
    adminTotalStock.textContent = totalStock;
    adminLowStock.textContent = lowStockCount;

    adminTableBody.innerHTML = products.map((p, index) => `
        <tr>
            <td>${index + 1}</td>
            <td><strong>${p.name}</strong></td>
            <td>${p.stock} ${p.unit}</td>
            <td>${p.sold}</td>
            <td><input type="number" class="stock-input" id="adminStockInput_${p.id}" value="${p.stock}" min="0" step="1" /></td>
            <td><button class="btn-stock-update" onclick="updateStock(${p.id})">Update</button></td>
        </tr>
    `).join('');
    adminStatus.textContent = '✅ Semua perubahan tersimpan otomatis.';
}

function updateStock(id) {
    const input = document.getElementById(`adminStockInput_${id}`);
    if (!input) return;
    const newStock = parseInt(input.value);
    if (isNaN(newStock) || newStock < 0) {
        showToast('⚠️ Masukkan jumlah stok yang valid (angka ≥ 0).', 'error');
        return;
    }
    const p = products.find(prod => prod.id === id);
    if (p) {
        p.stock = newStock;
        saveStockToLocalStorage();
        renderProducts();
        renderAdminPage();
        showToast(`✅ Stok "${p.name}" diperbarui menjadi ${newStock} ${p.unit}`, 'success');
    }
}

function resetAllStocks() {
    if (!confirm('⚠️ Reset semua stok ke nilai default? Data saat ini akan hilang.')) return;
    products = JSON.parse(JSON.stringify(PRODUCTS_DATA));
    saveStockToLocalStorage();
    renderProducts();
    renderAdminPage();
    showToast('↺ Semua stok telah direset ke default.', 'success');
}

adminResetBtn.addEventListener('click', resetAllStocks);

// ===== NAVIGATION =====
function navigateTo(page) {
    document.querySelectorAll('.page-section').forEach(s => s.classList.remove('active'));
    const target = document.getElementById(`page-${page}`);
    if (target) target.classList.add('active');

    navLinks.forEach(link => {
        link.classList.toggle('active', link.dataset.page === page);
    });

    const pageNames = {
        home: 'Beranda',
        about: 'Sejarah & Visi',
        products: 'Katalog Ekspor',
        analytics: 'Data & Probabilitas',
        checkout: 'B2B Portal',
        admin: 'Panel Admin'
    };
    breadcrumbText.textContent = pageNames[page] || page;
    currentPage = page;

    if (page === 'products') renderProducts();
    if (page === 'checkout') renderCart();
    if (page === 'admin') renderAdminPage();

    navMenu.classList.remove('open');
}

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        navigateTo(this.dataset.page);
    });
});

document.querySelector('.logo-container').addEventListener('click', function(e) {
    e.preventDefault();
    navigateTo('home');
});

document.querySelectorAll('[data-page]').forEach(el => {
    el.addEventListener('click', function(e) {
        const page = this.dataset.page;
        if (page) { e.preventDefault(); navigateTo(page); }
    });
});

mobileToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
});

// ===== CHECKOUT FORM =====
document.getElementById('b2bOrderForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const company = document.getElementById('companyName').value.trim();
    const buyer = document.getElementById('buyerName').value.trim();
    const email = document.getElementById('buyerEmail').value.trim();
    const phone = document.getElementById('buyerPhone').value.trim();
    const country = document.getElementById('destinationCountry').value.trim();
    const incoterms = document.getElementById('incoterms').value;
    const notes = document.getElementById('additionalNotes').value.trim() || '-';

    if (!company || !buyer || !email || !phone || !country) {
        showToast('⚠️ Harap lengkapi semua data yang diperlukan.', 'error');
        return;
    }
    if (cart.length === 0) {
        showToast('⚠️ Keranjang kosong. Tambahkan produk terlebih dahulu.', 'error');
        return;
    }

    let orderDetails = '';
    let totalAll = 0;
    let stockError = false;
    cart.forEach(item => {
        const p = products.find(prod => prod.id === item.productId);
        if (!p) return;
        if (p.stock < item.qty) {
            showToast(`⚠️ Stok "${p.name}" tidak mencukupi! Tersisa ${p.stock} ${p.unit}.`, 'error');
            stockError = true;
            return;
        }
        const subtotal = p.price * (p.unit === 'MT' ? item.qty * 1000 : item.qty);
        totalAll += subtotal;
        orderDetails += `- ${p.name} : ${item.qty} ${p.unit} ($${subtotal.toFixed(2)})\n`;
    });
    if (stockError) return;

    // Update stock & sold
    cart.forEach(item => {
        const p = products.find(prod => prod.id === item.productId);
        if (p) {
            p.stock = Math.max(0, p.stock - item.qty);
            p.sold += item.qty;
        }
    });
    saveStockToLocalStorage();

    const msg = `*SURAT MINAT PEMBELIAN (PO) - B2B NAX*
----------------------------------------
*Informasi Pembeli:*
🏢 Perusahaan: ${company}
👤 Perwakilan: ${buyer}
📧 Email: ${email}
📞 Kontak WA: ${phone}

*Logistik & Pengiriman:*
📍 Tujuan: ${country}
🚢 Incoterms: ${incoterms}

*Rincian Pesanan:*
${orderDetails}
💰 Total Estimasi: $${totalAll.toFixed(2)}

*Catatan Khusus:*
📝 ${notes}
----------------------------------------
Mohon segera diterbitkan Proforma Invoice Resmi untuk verifikasi pembayaran.`;

    window.open(`https://wa.me/6285860095139?text=${encodeURIComponent(msg)}`, '_blank');

    cart = [];
    saveCartToLocalStorage();
    renderCart();
    renderProducts();
    renderAdminPage();
    showToast('✅ Pesanan berhasil dikirim! Stok telah diperbarui.', 'success');

    document.getElementById('b2bOrderForm').reset();
    document.getElementById('selectedCommodity').value = 'Tambahkan produk dari katalog';
});

// ===== INIT =====
function init() {
    loadStockFromLocalStorage();
    loadCartFromLocalStorage();
    renderProducts();
    renderCart();
    renderAdminPage();
    navigateTo('home');

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) navMenu.classList.remove('open');
    });

    searchInput.addEventListener('input', () => { currentPageProducts = 1; renderProducts(); });
    filterRating.addEventListener('change', () => { currentPageProducts = 1; renderProducts(); });
    sortSelect.addEventListener('change', () => { currentPageProducts = 1; renderProducts(); });

    console.log('🚀 Nusantara Agri-Exchange siap!');
}

document.addEventListener('DOMContentLoaded', init);