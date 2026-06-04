import "./App.css";

const categories = [
  { title: "Văn hóa - Lịch sử", count: "216 đầu sách", image: "/images/category-history.jpg" },
  { title: "Sức khỏe - Đông y", count: "148 đầu sách", image: "/images/category-health.jpg" },
  { title: "Kinh tế", count: "126 đầu sách", image: "/images/category-business.jpg" },
  { title: "Sách làm người", count: "184 đầu sách", image: "/images/category-life.jpg" },
  { title: "Tiểu thuyết", count: "320 đầu sách", image: "/images/category-novel.jpg" },
  { title: "Tủ sách quý", count: "Xếp hạng theo giá trị", image: "/images/category-rare.jpg" },
];

const rareBooks = [
  { title: "Việt Nam Sử Lược", rank: "SS", image: "/images/book-rare-01.jpg" },
  { title: "Quốc Văn Giáo Thư", rank: "SSS", image: "/images/book-rare-02.jpg" },
  { title: "Tâm Lý Học Đám Đông", rank: "S", image: "/images/book-rare-03.jpg" },
  { title: "Sách Đông Y Cổ", rank: "SS", image: "/images/book-rare-04.jpg" },
];

function App() {
  return (
    <main className="site">
      <header className="nav">
        <div className="brand">Trạm Sách Cổ</div>
        <nav>
          <a href="#categories">Danh mục</a>
          <a href="#rare">Tủ sách quý</a>
          <a href="#find">Tìm sách</a>
        </nav>
      </header>

      <section className="hero">
        <div className="heroOverlay" />
        <div className="heroContent">
          <p className="eyebrow">Hơn 1.000 đầu sách cũ & sách quý</p>
          <h1>Nơi ta nhặt được báu vật giữa những trang sách cũ</h1>
          <p>
            Kho sách chính kết hợp mạng lưới người yêu sách, nhà sưu tầm và kho sách liên kết —
            giúp bạn tìm lại những cuốn sách có giá trị sử dụng, ứng dụng và lưu giữ theo thời gian.
          </p>
          <div className="heroActions">
            <a className="btn primary" href="#find">Tìm sách cho tôi</a>
            <a className="btn ghost" href="#categories">Xem tủ sách</a>
          </div>
        </div>
      </section>

      <section className="intro">
        <h2>Tri thức cũ, giá trị không cũ</h2>
        <p>
          Chúng tôi ưu tiên những cuốn sách được viết bởi các tác giả có tài, có tâm,
          nghiên cứu nghiêm túc và để lại giá trị thật cho người đọc hôm nay.
        </p>
      </section>

      <section id="categories" className="section">
        <div className="sectionHead">
          <p className="eyebrow">Danh mục chính</p>
          <h2>Bạn tìm dòng sách nào?</h2>
        </div>

        <div className="categoryGrid">
          {categories.map((item) => (
            <article className="categoryCard" key={item.title}>
              <img src={item.image} alt={item.title} />
              <div>
                <h3>{item.title}</h3>
                <p>{item.count}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="rare" className="section rareSection">
        <div className="sectionHead">
          <p className="eyebrow">Top sách quý</p>
          <h2>Phân hạng giá trị tri thức</h2>
          <p className="short">
            Không chỉ theo giá bán — mà theo độ hiếm, giá trị học thuật, giá trị ứng dụng và sức ảnh hưởng.
          </p>
        </div>

        <div className="rareScroller">
          {rareBooks.map((book) => (
            <article className="bookCard" key={book.title}>
              <img src={book.image} alt={book.title} />
              <span>Hạng {book.rank}</span>
              <h3>{book.title}</h3>
            </article>
          ))}
        </div>
      </section>

      <section id="find" className="findSection">
        <div className="findText">
          <p className="eyebrow">Mạng lưới tìm sách</p>
          <h2>Không có trong kho? Chúng tôi vẫn tìm giúp bạn.</h2>
          <p>
            Gửi tên sách, tác giả hoặc hình bìa. Trạm Sách Cổ sẽ kiểm tra kho chính,
            kho liên kết và mạng lưới nhà sưu tầm để tăng cơ hội tìm lại “báu vật” của bạn.
          </p>

          <div className="steps">
            <span>1. Gửi tên sách</span>
            <span>2. Kiểm tra kho & mạng lưới</span>
            <span>3. Gửi hình thật trước khi chốt</span>
          </div>

          <a className="btn primary" href="https://zalo.me/" target="_blank" rel="noreferrer">
            Nhắn Zalo tìm sách
          </a>
        </div>

        <div className="networkVisual">
          <img src="/images/network-map.jpg" alt="Mạng lưới tìm sách" />
        </div>
      </section>

      <section className="gallery">
  <div className="galleryHeader">
    <p className="eyebrow">Góc kho sách</p>
    <h2>Một góc nhỏ của hơn 1.000 đầu sách đang được lưu giữ</h2>
    <p>
      Từ sách xưa, sách quý, sách ngừng xuất bản đến những cuốn sách còn nguyên giá trị sử dụng —
      mỗi cuốn đều được kiểm tra và chụp hình thật trước khi gửi đến người cần.
    </p>
  </div>

  <div className="galleryShowcase">
    <article className="galleryFeature">
      <img src="/images/warehouse-01.jpg" alt="Kho sách cổ" />
      <div>
        <span>Kho chính</span>
        <h3>Hơn 1.000 đầu sách cũ & sách quý</h3>
      </div>
    </article>

    <article className="galleryTile">
      <img src="/images/warehouse-02.jpg" alt="Kệ sách cũ" />
      <span>Kệ sách tuyển chọn</span>
    </article>

    <article className="galleryTile">
      <img src="/images/warehouse-03.jpg" alt="Tình trạng sách thật" />
      <span>Hình thật trước khi chốt</span>
    </article>

    <article className="galleryStory">
      <img src="/images/founder.jpg" alt="Người giữ sách" />
      <div>
        <span>Người giữ sách</span>
        <p>
          "Nếu cuốn sách bạn tìm vẫn còn tồn tại ở đâu đó, chúng tôi sẽ nỗ lực tìm lại nó cho bạn."
        </p>
      </div>
    </article>
  </div>
</section>

      <section className="finalCta">
        <h2>Bạn đang tìm sách?</h2>
        <p>Nếu đó là “báu vật” của bạn, hãy cho chúng tôi cơ hội tìm giúp bạn.</p>
        <a className="btn primary" href="https://zalo.me/" target="_blank" rel="noreferrer">
          Gửi yêu cầu tìm sách
        </a>
      </section>

      <footer>
        <strong>Trạm Sách Cổ</strong>
        <span>Mua bán · Trao đổi · Sưu tầm · Cho tặng · Tìm sách theo yêu cầu</span>
      </footer>
    </main>
  );
}

export default App;