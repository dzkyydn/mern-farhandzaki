import React, { useState } from "react"
import axios from "axios"
import "./homepage.css"
import logo from "./img/logo.png"
import sayurLodeh from "./img/sayurlodeh.png"
import tempeOrek from "./img/orektempe.png"
import dendengBalado from "./img/dendengbalado.png"
import esTehManis from "./img/estehmanis.png"

const Homepage = ({setLoginUser}) => {

    const [pesanan, setUser] = useState({
        email:"",
        pesan:""
    })

    const handleChange = e => {
        const { email, value } = e.target
        setUser({
            ...pesanan,
            [email]: value
        })
    }

    const pemesanan = () => {
        const { email, pesan } = pesanan
        if( email && pesan ){
            axios.post("http://localhost:9002/pesanan", pesanan)
        }
        /*if( email && pesan ){
            axios.post("http://localhost:9002/pesanan", pesanan)
        } else {
            alert("invlid input")
        }*/
        
    }

    return (
        <div className="homepage">
            <div className='body'>
                <div className="header">
                    {/* NAVBAR / HAMBURGER MENU START */}
                    <section className="top-nav" />
                    <div>
                    <div className="header-logo">
                        <img src={logo} width="30%" alt=''/>
                    </div>
                    </div>
                    <input id="menu-toggle" type="checkbox" />
                    <label className="menu-button-container" htmlFor="menu-toggle">
                    <div className="menu-button" />
                    </label>
                    <ul className="menu" id="nav-menu">
                    <li>
                        <a className="menu-header-footer" href="#tentang">Tentang</a>
                    </li>
                    <li>
                        <a className="menu-header-footer" href="#menu-makanan">Menu Makanan</a>
                    </li>
                    <li>
                        <a className="menu-header-footer" href="#kontak">Pemesanan</a>
                    </li>
                    <li>
                        <a className="menu-header-footer logout" href="#logout" onClick={() => setLoginUser({})}><strong>LogOut</strong></a>
                    </li>
                    </ul>
                    {/* NAVBAR / HAMBURGER MENU STOP */}
                </div>

                <div className="main">
                    {/* TENTANG START */}
                    <div className="copy-container" id="tentang">
                    <h1>
                        WarTeg<span>in</span>
                    </h1>
                    <br />
                    <div>
                        <p style={{ textIndent: "0.5in" }}>
                        <img
                            className="img-warteg"
                            src="https://www.goodnewsfromindonesia.id/uploads/post/large-goodnewsfromindonesia-gnfi-menu-warteg-ac1d395b67ebc01401488e05f890fbd6.jpg"
                            alt=''
                        />
                        Kata <b>'warteg'</b> dalam benak orang Indonesia pada saat ini
                        mungkin sudah sangat lazim. <b>'Warteg'</b>
                        adalah singkatan dari dua kata yang digabung yakni <b>
                            'warung'
                        </b>{" "}
                        dan <b>'Tegal'</b>. Menurut KBBI, <b>'warung'</b> biasanya merujuk
                        pada suatu tempat yang tidak terlalu besar, tempat orang menjajakan
                        sesuatu, bisa itu makanan, minuman, kelontong, dan sebagainya.
                        Sedangkan, <b>'Tegal'</b>, dengan "T" besar jelas menunjuk pada nama
                        suatu kota.
                        </p>
                        <p style={{ textIndent: "0.5in" }}>
                        Makanan dan minuman yang disajikan di warteg biasanya sederhana,
                        serta melayani keinginan warga untuk berbagai makanan gurih, pedas,
                        dan manis. Biasanya makanan warteg disajikan lengkap dengan nasi
                        putih serta minuman manis.
                        </p>
                    </div>
                    </div>
                    {/* TENTANG STOP */}
                    {/* KONTEN MENU START */}
                    <div className="contents" id="menu-makanan">
                    <h3 className="section-title">
                        <span>
                        <i className="fa-solid fa-utensils" />
                        </span>{" "}
                        Menu
                    </h3>
                    <div className="contents-item">
                        <img className="click click1" src={sayurLodeh} alt='' />
                        <p>Sayur Lodeh</p>
                    </div>
                    <div className="contents-item">
                        <img className="click click2" src={tempeOrek} alt='' />
                        <p>Tempe Orek</p>
                    </div>
                    <div className="contents-item">
                        <img className="click click3" src={dendengBalado} alt='' />
                        <p>Dendeng Balado</p>
                    </div>
                    <div className="contents-item">
                        <img className="click click4" src={esTehManis} alt='' />
                        <p>Es teh Manis</p>
                    </div>
                    </div>
                    {/* KONTEN MENU STOP */}
                    {/* KONTAK START */}
                    <div className="contact-form" id="kontak" method="post" action="/pemesanan">
                    <h3 className="section-title">Pemesanan</h3>
                    <p>Email</p>
                    <input placeholder="Wajib diisi menggunakan gmail / yahoo" name="email" onChange={ handleChange }/>
                    <p>Pesan</p>
                    <input placeholder="* Bidang wajib diisi." name="pesan" onChange={ handleChange }/>
                    <p className="diatas-send">Pastikan alamat email sudah sesuai</p>
                    <input className="contact-submit" type="submit" defaultValue="Send" onClick={pemesanan}/>
                    </div>
                    {/* KONTAK STOP */}
                </div>

                {/* FOOTER START */}
                <div className="footer">
                    <div className="footer-logo">
                    <img src={logo} width="60%" alt=''/>
                    </div>
                    <div className="footer-list">
                    <ul>
                        <li>
                        <a className="menu-header-footer" href="#tentang">
                            <i className="fas fa-home-alt" /> Tentang
                        </a>
                        </li>
                        <li>
                        <a className="menu-header-footer" href="#menu-makanan">
                            <i className="fa-solid fa-utensils" /> Menu Makanan
                        </a>
                        </li>
                        <li>
                        <a className="menu-header-footer" href="#kontak">
                            <i className="fa-solid fa-phone" /> Pemesanan
                        </a>
                        </li>
                    </ul>
                    </div>
                </div>
                {/* FOOTER STOP */}

                {/* COPYRIGHT START */}
                <div className="copyright">
                    <h5>
                    Copyright 2022 © Develop by{" "}
                    <a href="https://www.instagram.com/frhnyswa/" target="_blank" rel='noreferrer'>
                        Farhan Yuswa Biyanto
                    </a>{" "}
                    and{" "}
                    <a href="https://www.instagram.com/dzkyydn/" target="_blank" rel='noreferrer'>
                        Muhammad Dzakiyyudin
                    </a>
                    </h5>
                    <p>
                    Pemrograman Berbasis Web, Broadband Multimedia, Politeknik Negeri
                    Jakarta.
                    </p>
                </div>
                {/* COPYRIGHT STOP */}
            </div>
        </div>
    )
}

export default Homepage