'use strict';

function escapeHTML(str) {
  if (typeof str !== 'string') return str;
  return str.replace(/[&<>'"]/g, function(m) {
    return {'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[m];
  });
}


const produkRetail = [
  { id:1, nama:"Beras Ramos 5kg", kategori:"sembako", harga:68500, hargaAsli:85000, gambar:"", berat:"5kg", promo:"sensabu" },
  { id:2, nama:"Minyak Goreng Fortune 2L", kategori:"dapur", harga:35900, hargaAsli:45000, gambar:"", berat:"2L", promo:"sensabu" },
  { id:3, nama:"Gula Pasir Gulavit 1kg", kategori:"sembako", harga:14500, hargaAsli:17500, gambar:"", berat:"1kg", promo:"sensabu" },
  { id:4, nama:"Tepung Terigu Segitiga 1kg", kategori:"sembako", harga:12500, hargaAsli:15000, gambar:"", berat:"1kg", promo:"sensabu" },
  { id:5, nama:"Mie Instan Soto 5 pcs", kategori:"makanan", harga:12500, hargaAsli:15000, gambar:"", berat:"5 bungkus", promo:"sensabu" },
  { id:6, nama:"Kecap Manis Bango 550ml", kategori:"dapur", harga:28000, hargaAsli:32000, gambar:"", berat:"550ml", promo:"sensabu" },
  { id:7, nama:"Sabun Mandi Lifebuoy 2in1", kategori:"perawatan", harga:14500, hargaAsli:17000, gambar:"", berat:"450ml", promo:"sensabu" },
  { id:8, nama:"Pasta Gigi Pepsodent 160g", kategori:"perawatan", harga:12500, hargaAsli:15000, gambar:"", berat:"160g", promo:"sensabu" },
  { id:9, nama:"Indomie Goreng (40 pcs)", kategori:"makanan", harga:42000, hargaAsli:52000, gambar:"", berat:"40 pcs", promo:"jusami" },
  { id:10, nama:"Ultra Milk Coklat 1L", kategori:"minuman", harga:16500, hargaAsli:19000, gambar:"", berat:"1L", promo:"jusami" },
  { id:11, nama:"Teh Botol Sosro 500ml (6 pcs)", kategori:"minuman", harga:38000, hargaAsli:48000, gambar:"", berat:"6 x 500ml", promo:"jusami" },
  { id:12, nama:"Susu Kental Manis Frisian Flag", kategori:"minuman", harga:11500, hargaAsli:14000, gambar:"", berat:"370g", promo:"jusami" },
  { id:13, nama:"Roti Tawar Sariroti", kategori:"makanan", harga:21000, hargaAsli:25000, gambar:"", berat:"480g", promo:"jusami" },
  { id:14, nama:"Selai Stroberi Morin", kategori:"makanan", harga:23500, hargaAsli:28000, gambar:"", berat:"300g", promo:"jusami" },
  { id:15, nama:"Kopi Kapal Api 50g", kategori:"minuman", harga:8500, hargaAsli:11000, gambar:"", berat:"50g", promo:"jusami" },
  { id:16, nama:"Nabati Keju 145g", kategori:"cemilan", harga:9900, hargaAsli:15000, gambar:"", berat:"145g", promo:"gajian" },
  { id:17, nama:"Chitato Sapi Panggang 68g", kategori:"cemilan", harga:8500, hargaAsli:12000, gambar:"", berat:"68g", promo:"gajian" },
  { id:18, nama:"Kapal Api Special Mix 20 sachet", kategori:"minuman", harga:26000, hargaAsli:32000, gambar:"", berat:"20 sachet", promo:"gajian" },
  { id:19, nama:"Oreo Coklat 133g", kategori:"cemilan", harga:9800, hargaAsli:13000, gambar:"", berat:"133g", promo:"gajian" },
  { id:20, nama:"SilverQueen Almond 100g", kategori:"cemilan", harga:14500, hargaAsli:19000, gambar:"", berat:"100g", promo:"gajian" },
  { id:21, nama:"Pocky Chocolate 47g", kategori:"cemilan", harga:7500, hargaAsli:10000, gambar:"", berat:"47g", promo:"gajian" },
  { id:22, nama:"Lays Keripik Kentang 68g", kategori:"cemilan", harga:11500, hargaAsli:15000, gambar:"", berat:"68g", promo:"gajian" },
  { id:23, nama:"Telur Ayam Negeri 1kg", kategori:"makanan", harga:28000, hargaAsli:32000, gambar:"", berat:"1kg", promo:"bulanan" },
  { id:24, nama:"Apel Fuji 500g", kategori:"buah", harga:16500, hargaAsli:22000, gambar:"", berat:"500g", promo:"bulanan" },
  { id:25, nama:"Popok Bayi MamyPoko XXL 30", kategori:"bayi", harga:62000, hargaAsli:72000, gambar:"", berat:"30 pcs", promo:"bulanan" },
  { id:26, nama:"Sabun Cuci Piring Sunlight 450ml", kategori:"rumah", harga:21000, hargaAsli:25000, gambar:"", berat:"450ml", promo:"bulanan" },
  { id:27, nama:"Shampo Clear 340ml", kategori:"perawatan", harga:33000, hargaAsli:39000, gambar:"", berat:"340ml", promo:"bulanan" },
  { id:28, nama:"Sabun Colek Daia 900g", kategori:"rumah", harga:16000, hargaAsli:20000, gambar:"", berat:"900g", promo:"bulanan" },
  { id:29, nama:"Pisang Ambon 1kg", kategori:"buah", harga:18500, hargaAsli:23000, gambar:"", berat:"1kg", promo:"bulanan" },
  { id:30, nama:"Jeruk Medan 500g", kategori:"buah", harga:17500, hargaAsli:21000, gambar:"", berat:"500g", promo:"bulanan" }
];

let cart = JSON.parse(localStorage.getItem('cartRetail')) || [];
let currentKategori = 'all';
let currentPromo = 'sensabu';
let currentSearch = '';
let visitorCount = localStorage.getItem('visitorCount') ? parseInt(localStorage.getItem('visitorCount')) : 0;
let orders = JSON.parse(localStorage.getItem('orders')) || [];

visitorCount++;
localStorage.setItem('visitorCount', visitorCount);
if (document.getElementById('adminPanel') && document.getElementById('adminPanel').style.display === 'block') updateAdminStats();


document.getElementById('enterButton').addEventListener('click', function() {
  document.getElementById('splashScreen').classList.add('hidden');
  const audio = document.getElementById('bg-audio');
  if (audio.querySelector('source').src) {
    audio.play().catch(e => console.log('Audio tidak bisa diputar'));
  }
});

const menuToggle = document.getElementById('menuToggle');
const offcanvas = document.getElementById('offcanvasMenu');
const menuOverlay = document.getElementById('menuOverlay');
const closeMenuBtn = document.getElementById('closeMenu');

function openMenu() {
  offcanvas.classList.add('open');
  menuOverlay.classList.add('show');
}

function closeMenu() {
  offcanvas.classList.remove('open');
  menuOverlay.classList.remove('show');
}

menuToggle.addEventListener('click', openMenu);
closeMenuBtn.addEventListener('click', closeMenu);
menuOverlay.addEventListener('click', closeMenu);
window.closeMenu = closeMenu;

let slideIndex = 0;
function showSlide(index) {
  const slides = document.getElementById('carouselSlides');
  const dots = document.querySelectorAll('.dot');
  if (!slides) return;
  if (index >= slides.children.length) slideIndex = 0;
  if (index < 0) slideIndex = slides.children.length - 1;
  slides.style.transform = `translateX(-${slideIndex * 100}%)`;
  dots.forEach((d,i)=> d.classList.toggle('active', i===slideIndex));
}
window.nextSlide = ()=> { slideIndex++; showSlide(slideIndex); };
window.prevSlide = ()=> { slideIndex--; showSlide(slideIndex); };
window.gotoSlide = (idx)=> { slideIndex = idx; showSlide(slideIndex); };
setInterval(()=> { slideIndex++; showSlide(slideIndex); }, 5000);

window.pilihPromo = function(promo) {
  currentPromo = promo;
  document.querySelectorAll('.promo-card').forEach(c => c.classList.remove('active'));
  const el = document.getElementById(`promo${promo.charAt(0).toUpperCase()+promo.slice(1)}`);
  if (el) el.classList.add('active');
  renderProdukHome();
};

window.filterKategori = function(kategori, from = 'home') {
  currentKategori = kategori;
  const grids = document.querySelectorAll('.kategori-grid');
  grids.forEach(grid => {
    grid.querySelectorAll('.kategori-item').forEach(item => item.classList.remove('active'));
    grid.querySelectorAll('.kategori-item').forEach(item => {
      const text = item.querySelector('span').innerText.toLowerCase().replace(/\s/g, '_');
      if (text === kategori || (kategori === 'all' && text === 'semua')) {
        item.classList.add('active');
      }
    });
  });
  if (from === 'home') renderProdukHome();
  else renderSemuaProduk();
};

function renderProdukHome() {
  const container = document.getElementById('produkPromo');
  let filtered = produkRetail.filter(p => p.promo === currentPromo);
  if (currentKategori !== 'all') filtered = filtered.filter(p => p.kategori === currentKategori);
  if (currentSearch) filtered = filtered.filter(p => p.nama.toLowerCase().includes(currentSearch.toLowerCase()));
  container.innerHTML = filtered.map(p => `<div class="produk-card"><div class="produk-gambar"><img src="${p.gambar}" alt="${p.nama}"></div><div class="produk-info"><div class="produk-nama">${p.nama}</div><div class="produk-berat"><i class="fas fa-weight-hanging"></i> ${p.berat}</div><div class="produk-harga"><span class="harga-asli">Rp ${p.hargaAsli.toLocaleString()}</span><span class="harga-promo">Rp ${p.harga.toLocaleString()}</span></div><button class="btn-tambah" onclick="tambahKeKeranjang(${p.id})"><i class="fas fa-cart-plus"></i> Tambah</button></div></div>`).join('');
}

function renderSemuaProduk() {
  const container = document.getElementById('semuaProduk');
  let filtered = produkRetail;
  if (currentKategori !== 'all') filtered = filtered.filter(p => p.kategori === currentKategori);
  if (currentSearch) filtered = filtered.filter(p => p.nama.toLowerCase().includes(currentSearch.toLowerCase()));
  container.innerHTML = filtered.map(p => `<div class="produk-card"><div class="produk-gambar"><img src="${p.gambar}" alt="${p.nama}"></div><div class="produk-info"><div class="produk-nama">${p.nama}</div><div class="produk-berat"><i class="fas fa-weight-hanging"></i> ${p.berat}</div><div class="produk-harga"><span class="harga-asli">Rp ${p.hargaAsli.toLocaleString()}</span><span class="harga-promo">Rp ${p.harga.toLocaleString()}</span></div><button class="btn-tambah" onclick="tambahKeKeranjang(${p.id})"><i class="fas fa-cart-plus"></i> Tambah</button></div></div>`).join('');
}

window.searchProduk = function() {
  currentSearch = document.getElementById('searchDesktop').value || document.getElementById('searchMobile').value;
  if (document.getElementById('home').classList.contains('active')) renderProdukHome();
  else if (document.getElementById('produk').classList.contains('active')) renderSemuaProduk();
};

window.tambahKeKeranjang = function(id) {
  const produk = produkRetail.find(p => p.id === id);
  const existing = cart.find(i => i.id === id);
  if (existing) existing.quantity++;
  else cart.push({...produk, quantity:1});
  saveCart(); updateCartUI(); showToast(`${produk.nama} ditambahkan`,'success');
};

window.updateQuantity = function(id, change) {
  const idx = cart.findIndex(i => i.id === id); if (idx===-1) return;
  cart[idx].quantity += change;
  if (cart[idx].quantity <= 0) cart.splice(idx,1);
  saveCart(); updateCartUI();
};

window.removeFromCart = function(id) { cart = cart.filter(i => i.id !== id); saveCart(); updateCartUI(); showToast('Produk dihapus','success'); };
function saveCart() { localStorage.setItem('cartRetail', JSON.stringify(cart)); }

function updateCartUI() {
  const totalItems = cart.reduce((s,i)=> s + i.quantity,0);
  const cartCount = document.getElementById('cartCount');
  if (totalItems===0) { cartCount.classList.add('hidden'); document.getElementById('checkoutBtn').disabled = true; }
  else { cartCount.classList.remove('hidden'); cartCount.textContent = totalItems; document.getElementById('checkoutBtn').disabled = false; }
  const cartItemsDiv = document.getElementById('cartItems');
  if (cart.length===0) cartItemsDiv.innerHTML = '<p style="text-align:center;color:var(--abu);">Keranjang kosong</p>';
  else cartItemsDiv.innerHTML = cart.map(item => `<div class="cart-item"><img src="${item.gambar}" alt="${item.nama}"><div class="cart-item-info"><div class="cart-item-name">${item.nama}</div><div class="cart-item-price">Rp ${item.harga.toLocaleString()}</div><div class="cart-item-qty"><button class="qty-btn" onclick="updateQuantity(${item.id}, -1)"><i class="fas fa-minus"></i></button><span>${item.quantity}</span><button class="qty-btn" onclick="updateQuantity(${item.id}, 1)"><i class="fas fa-plus"></i></button><button class="remove-item" onclick="removeFromCart(${item.id})"><i class="fas fa-trash"></i></button></div></div></div>`).join('');
  document.getElementById('cartTotal').textContent = `Rp ${cart.reduce((s,i)=> s + i.harga * i.quantity,0).toLocaleString()}`;
}

window.toggleCart = ()=> document.getElementById('cartSidebar').classList.toggle('open');


window.showPage = function(pageId) {
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById(pageId).classList.add('active');
  document.querySelectorAll('.bottom-nav .nav-item').forEach(item => item.classList.remove('active'));
  const navMap = { 'home': 0, 'about': 1, 'produk': 2, 'kontak': 3 };
  if (navMap[pageId] !== undefined) {
    document.querySelectorAll('.bottom-nav .nav-item')[navMap[pageId]].classList.add('active');
  }
  if (pageId === 'home') {
    currentKategori = 'all';
    filterKategori('all', 'home');
    renderProdukHome();
  } else if (pageId === 'produk') {
    currentKategori = 'all';
    const homeKategori = document.querySelector('#home .kategori-grid').cloneNode(true);
    const targetGrid = document.getElementById('kategoriProduk');
    targetGrid.innerHTML = '';
    targetGrid.appendChild(homeKategori);
    targetGrid.querySelectorAll('.kategori-item').forEach((el, index) => {
      el.addEventListener('click', function(e) {
        const span = this.querySelector('span');
        if (!span) return;
        let kategori = span.innerText.toLowerCase().replace(/\s/g, '_');
        if (kategori === 'semua') kategori = 'all';
        filterKategori(kategori, 'produk');
      });
    });
    filterKategori('all', 'produk');
    renderSemuaProduk();
  } else if (pageId === 'admin') {
    updateAdminStats();
  }
};

window.openCheckoutModal = function() {
  if (cart.length === 0) {
    showToast('Keranjang kosong', 'error');
    return;
  }
  document.getElementById('checkoutModal').classList.add('active');
};

window.closeModal = function() {
  document.getElementById('checkoutModal').classList.remove('active');
};

document.querySelectorAll('input[name="delivery"]').forEach(r => r.addEventListener('change', function() {
  document.getElementById('addressGroup').style.display = this.value === 'delivery' ? 'block' : 'none';
}));

window.submitOrder = function() {
  const name = document.getElementById('customerName').value.trim();
  const phone = document.getElementById('customerPhone').value.trim();
  const delivery = document.querySelector('input[name="delivery"]:checked').value;
  const payment = document.querySelector('input[name="payment"]:checked').value;
  const address = document.getElementById('customerAddress').value.trim();
  const notes = document.getElementById('customerNotes').value.trim();
  if (!name||!phone) return showToast('Nama dan telepon harus diisi','error');
  if (delivery==='delivery' && !address) return showToast('Alamat harus diisi','error');
  let subtotal = 0;
  cart.forEach(item => { subtotal += item.harga * item.quantity; });
  const paymentLabel = payment === 'qris' ? 'QRIS' : 'Cash (COD)';
  const order = {
    waktu: new Date().toLocaleString('id-ID'),
    nama: name,
    telepon: phone,
    metode: delivery === 'pickup' ? 'Ambil di Toko' : 'Antar ke Rumah',
    pembayaran: paymentLabel,
    total: subtotal,
    status: 'Selesai'
  };
  orders.push(order);
  localStorage.setItem('orders', JSON.stringify(orders));
  if (document.getElementById('adminPanel') && document.getElementById('adminPanel').style.display === 'block') updateAdminStats();
  let message = `*TOSERBA YOLA - PESANAN BARU*\n\n👤 *Nama:* ${name}\n📱 *HP:* ${phone}\n🏪 *Metode:* ${delivery==='pickup'?'Ambil di Toko':'Antar ke Rumah'}\n`;
  if (delivery==='delivery') message += `🏠 *Alamat:* ${address}\n`;
  message += `💳 *Pembayaran:* ${paymentLabel}\n${notes ? '📝 *Catatan:* '+notes+'\n' : ''}\n*═════════ DETAIL PRODUK ═════════*\n`;
  cart.forEach(item => { const sub = item.harga * item.quantity; message += `✓ ${item.nama} ${item.quantity}x Rp ${item.harga.toLocaleString()} = Rp ${sub.toLocaleString()}\n`; });
  message += `═════════════════════════════════\n*💰 TOTAL: Rp ${subtotal.toLocaleString()}*\n\nTerima kasih.`;
  const _win = window.open(`https://wa.me/6282130998503?text=${encodeURIComponent(message)}`,'_blank');
  if(_win) _win.opener = null;
  cart = []; saveCart(); updateCartUI(); closeModal();
  document.getElementById('customerName').value = '';
  document.getElementById('customerPhone').value = '';
  document.getElementById('customerAddress').value = '';
  showToast('Pesanan dikirim!','success');
};

window.adminLogin = function() {
  const user = document.getElementById('adminUser').value;
  const pass = document.getElementById('adminPass').value;
  if (user === 'admin' && pass === '@Yola123') {
    document.getElementById('adminLogin').style.display = 'none';
    document.getElementById('adminPanel').style.display = 'block';
    updateAdminStats();
  } else {
    showToast('Username atau password salah', 'error');
  }
};

window.adminLogout = function() {
  document.getElementById('adminLogin').style.display = 'block';
  document.getElementById('adminPanel').style.display = 'none';
};

function updateAdminStats() {
  document.getElementById('visitorCount').textContent = visitorCount;
  document.getElementById('orderCount').textContent = orders.length;
  const ordersList = document.getElementById('ordersList');
  if (orders.length === 0) {
    ordersList.innerHTML = '<tr><td colspan="6" style="text-align:center;">Belum ada order</td></tr>';
  } else {
    ordersList.innerHTML = orders.slice().reverse().map(o => `<tr><td>${o.waktu}</td><td>${o.nama}</td><td>${o.telepon}</td><td>${o.metode}</td><td>Rp ${o.total.toLocaleString()}</td><td><span class="badge-admin">${o.status}</span></td></tr>`).join('');
  }
}

window.addEventListener('storage', function(e) {
  if (e.key === 'visitorCount') {
    visitorCount = parseInt(localStorage.getItem('visitorCount') || '0');
    if (document.getElementById('adminPanel') && document.getElementById('adminPanel').style.display === 'block') updateAdminStats();
  }
  if (e.key === 'orders') {
    orders = JSON.parse(localStorage.getItem('orders') || '[]');
    if (document.getElementById('adminPanel') && document.getElementById('adminPanel').style.display === 'block') updateAdminStats();
  }
});

setInterval(function() {
  const v = parseInt(localStorage.getItem('visitorCount') || '0');
  const o = JSON.parse(localStorage.getItem('orders') || '[]');
  if (v !== visitorCount || JSON.stringify(o) !== JSON.stringify(orders)) {
    visitorCount = v;
    orders = o;
    if (document.getElementById('adminPanel') && document.getElementById('adminPanel').style.display === 'block') updateAdminStats();
  }
}, 3000);

function showToast(msg, type='success') {
  const t = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className=`toast ${type}`;
  toast.innerHTML=`<i class="fas fa-${type==='success'?'check-circle':'exclamation-circle'}"></i><span>${msg}</span>`;
  t.appendChild(toast);
  setTimeout(()=>toast.remove(),3000);
}

window.onclick = e => {
  if (e.target.classList.contains('modal')) {
    e.target.classList.remove('active');
  }
};

document.addEventListener('keydown', e => {
  if(e.key==='Escape') {
    document.querySelectorAll('.modal.active').forEach(m=>m.classList.remove('active'));
    document.getElementById('cartSidebar').classList.remove('open');
    closeMenu();
  }
});

if (window.location.hash === '#admin') {
  showPage('admin');
}

renderProdukHome();
updateCartUI();
