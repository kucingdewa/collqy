import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { ArrowUp, BookOpen, Check, CheckCheck, Diamond, GraduationCap, LockKeyhole, MessageCircle, MessagesSquare, ShieldCheck, Tags, Users, VenetianMask } from "lucide-react";
import raka from "@/assets/contributor-raka.jpg";
import nadia from "@/assets/contributor-nadia.jpg";
import dimas from "@/assets/contributor-dimas.jpg";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Collqy — Ruang Diskusi Ilmiah Mahasiswa" },
    { name: "description", content: "Bertanya, berbagi pengetahuan, dan berdiskusi ilmiah bersama mahasiswa satu universitas. Kenali Collqy dan fitur anonimitasnya." },
    { property: "og:title", content: "Collqy — Ruang Diskusi Ilmiah Mahasiswa" },
    { property: "og:description", content: "Ruang bertanya untuk mahasiswa, dengan diskusi ilmiah dan pilihan identitas anonim." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

const features = [
  { icon: VenetianMask, title: "Bertanya secara anonim", description: "Pilih untuk menyembunyikan identitasmu saat bertanya. Fokus pada ide dan pertanyaan, bukan siapa yang mengajukannya." },
  { icon: MessagesSquare, title: "Diskusi ilmiah yang terarah", description: "Bahas materi kuliah, metode penelitian, hingga gagasan baru lewat pertanyaan dan jawaban yang terstruktur." },
  { icon: GraduationCap, title: "Komunitas satu universitas", description: "Terhubung dengan mahasiswa lintas jurusan di kampusmu. Perspektif berbeda, lingkungan akademik yang sama." },
  { icon: Tags, title: "Topik yang mudah ditemukan", description: "Gunakan tag untuk mengelompokkan pertanyaan. Temukan diskusi sesuai mata kuliah dan bidang yang kamu minati." },
  { icon: CheckCheck, title: "Apresiasi jawaban bermanfaat", description: "Berikan upvote dan tandai jawaban yang membantu, agar pengetahuan yang relevan lebih mudah ditemukan bersama." },
  { icon: BookOpen, title: "Pengetahuan yang terus tumbuh", description: "Diskusi tidak hilang setelah terjawab. Jelajahi pertanyaan sebelumnya dan jadikan setiap jawaban bahan belajar." },
];
const steps = [
  { title: "Masuk ke komunitas kampus", description: "Gunakan akun universitasmu untuk bergabung dengan ruang diskusi mahasiswa di kampus yang sama." },
  { title: "Tanyakan yang ingin kamu pahami", description: "Tulis pertanyaan, tambahkan tag yang sesuai, dan pilih identitas anonim jika kamu merasa lebih nyaman." },
  { title: "Diskusikan, pahami, bagikan", description: "Dapatkan jawaban dari mahasiswa lain, lanjutkan diskusi, dan apresiasi jawaban yang paling membantumu." },
];
const contributors = [ { name: "Raka Pratama", role: "Frontend Developer", image: raka }, { name: "Nadia Putri", role: "UI/UX Designer", image: nadia }, { name: "Dimas Saputra", role: "Backend Developer", image: dimas } ];

function Index() {
  const [showLogin, setShowLogin] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const openLogin = () => { setSubmitted(false); setShowLogin(true); };
  const submitLogin = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setSubmitted(true); };
  return <>
    <header className="site-nav">
      <div className="page-container nav-inner">
        <a className="brand" href="#"><Diamond size={22} strokeWidth={2.5} />Collqy</a>
        <nav className="nav-links" aria-label="Navigasi utama">
          <a href="#mengapa">Mengapa Collqy</a><a href="#fitur">Fitur</a><a href="#cara-kerja">Cara kerja</a><a href="#contributor">contributor</a>
          <Button variant="nav" onClick={openLogin}>Mulai bertanya</Button>
        </nav>
      </div>
    </header>
    <main>
      <section className="hero">
        <h1>Ayo Mulai Bertanya</h1>
        <p>Temukan jawaban atas berbagai pertanyaanmu dan bagikan wawasan bersama komunitas sekarang juga.</p>
        <Button variant="hero" onClick={openLogin}>Mulai Bertanya</Button>
      </section>
      <section id="mengapa" className="section">
        <div className="page-container why-layout">
          <div className="why-copy">
            <span className="eyebrow">Mengapa Collqy</span>
            <h2>Pertanyaanmu berharga.<br />Identitasmu tetap milikmu.</h2>
            <p>Collqy adalah forum diskusi ilmiah untuk mahasiswa dalam satu universitas. Seperti Stack Overflow, Collqy mempertemukan pertanyaan dengan jawaban—dari materi kuliah hingga penelitian.</p>
            <p>Kami percaya rasa ingin tahu tidak seharusnya terhalang rasa sungkan. Dengan pilihan anonimitas, kamu bisa bertanya tanpa menampilkan identitas kepada mahasiswa lain. Yang dinilai adalah gagasanmu, bukan namamu.</p>
            <div className="privacy-note"><ShieldCheck size={19} />Ruang belajar bersama, dengan privasi yang berarti.</div>
          </div>
          <div className="discussion-preview" aria-label="Contoh diskusi anonim di Collqy">
            <div className="preview-top"><span><MessagesSquare size={15} />Diskusi kampus</span><span>Rasa ingin tahu, tanpa rasa sungkan.</span></div>
            <div className="preview-content">
              <div className="preview-user"><span className="anonymous-icon"><VenetianMask size={19} /></span><div>Mahasiswa anonim<small>Baru saja · Diskusi ilmiah</small></div><span className="anonymous-tag">Anonim</span></div>
              <h3>Apa bedanya metode penelitian kualitatif dan kuantitatif?</h3>
              <p>Aku sedang menyusun proposal penelitian. Bagaimana menentukan metode yang paling sesuai dengan pertanyaan penelitian?</p>
              <div className="tags"><span>metodologi</span><span>penelitian</span><span>skripsi</span></div>
              <div className="preview-bottom"><span><ArrowUp size={14} />12 upvote</span><span><MessageCircle size={14} />4 jawaban</span><span><Check size={14} />Terjawab</span></div>
            </div>
          </div>
        </div>
      </section>
      <section id="fitur" className="section features">
        <div className="page-container">
          <div className="section-header"><span className="eyebrow">Fitur Collqy</span><h2>Semua yang kamu butuhkan untuk berdiskusi.</h2><p className="section-intro">Dibangun untuk rasa ingin tahu, dirancang untuk saling membantu.<br />Belajar jadi lebih terbuka, tanpa mengorbankan kenyamananmu.</p></div>
          <div className="feature-grid">{features.map(({ icon: Icon, title, description }) => <article className="feature-card" key={title}><div className="feature-icon"><Icon size={22} strokeWidth={1.7} /></div><h3>{title}</h3><p>{description}</p></article>)}</div>
        </div>
      </section>
      <section id="cara-kerja" className="section">
        <div className="page-container">
          <div className="section-header"><span className="eyebrow">Cara kerja</span><h2>Dari satu pertanyaan, jadi pemahaman.</h2><p className="section-intro">Tiga langkah sederhana untuk mulai belajar bersama di Collqy.</p></div>
          <div className="workflow-grid">{steps.map((step, i) => <article className="step" key={step.title}><div className="step-number">0{i + 1}</div><h3>{step.title}</h3><p>{step.description}</p></article>)}</div>
        </div>
      </section>
      <section id="contributor" className="section contributors">
        <div className="page-container">
          <div className="section-header"><span className="eyebrow">Contributor</span><h2>Di balik ruang diskusi kita.</h2><p className="section-intro">Dari mahasiswa, untuk mahasiswa. Bersama membangun tempat<br />di mana setiap pertanyaan punya kesempatan untuk didengar.</p></div>
          <div className="contributor-grid">{contributors.map(person => <article className="contributor-card" key={person.name}><img src={person.image} alt={`Profil contoh ${person.name}`} width={88} height={88} loading="lazy" /><h3>{person.name}</h3><p>{person.role}</p></article>)}</div>
          <p className="contributor-caption">Nama dan foto contributor merupakan contoh.</p>
        </div>
      </section>
    </main>
    <footer className="site-footer"><div className="page-container"><div className="footer-main"><a className="brand" href="#"><Diamond size={22} />Collqy</a><p>Tempat rasa ingin tahu bertemu pengetahuan.</p></div><div className="footer-bottom"><span>© 2026 Collqy. Seluruh hak cipta dilindungi.</span><span>Dibangun untuk komunitas akademik.</span></div></div></footer>
    <Modal show={showLogin} onHide={() => setShowLogin(false)} centered aria-labelledby="login-title">
      <Modal.Header closeButton><Modal.Title id="login-title">Masuk ke Collqy</Modal.Title></Modal.Header>
      <Modal.Body>
        <p className="login-intro">Lanjutkan rasa ingin tahumu bersama komunitas kampus.</p>
        {submitted && <div className="login-notice" role="status">Login belum terhubung ke layanan akun. Saat ini halaman ini adalah pratinjau tampilan Collqy.</div>}
        <Form onSubmit={submitLogin}>
          <Form.Group className="login-field" controlId="login-email"><Form.Label>Email universitas</Form.Label><Form.Control type="email" placeholder="nama@universitas.ac.id" autoComplete="email" required /></Form.Group>
          <Form.Group className="login-field" controlId="login-password"><Form.Label>Kata sandi</Form.Label><Form.Control type="password" placeholder="Masukkan kata sandi" autoComplete="current-password" required /></Form.Group>
          <Button type="submit" variant="login">Masuk</Button>
        </Form>
        <p className="login-privacy"><LockKeyhole size={13} />Identitasmu tidak ditampilkan saat berdiskusi anonim.</p>
      </Modal.Body>
    </Modal>
  </>;
}
