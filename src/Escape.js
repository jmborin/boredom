import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; 
import { useNavigate } from "react-router-dom";
import './Escape.css';

const memberImages = [
    "/static/media/people/AndrewKasper.WebP",
    "/static/media/people/MaggieHolman.WebP",
    "/static/media/people/mollyrich.WebP",
    "/static/media/people/JessicaAzucena.WebP",
    "/static/media/people/PranavKodakara.WebP",
    "/static/media/people/emmajohnson.WebP",
    "/static/media/people/AilishO.WebP",
    "/static/media/people/MargaretPeriard.jpg",
    "/static/media/people/IzzyDubov.WebP",
    "/static/media/people/DhruvKapur.WebP",
    "/static/media/people/NainaNagar.jpeg",
    "/static/media/people/AaronHsu.WebP",
    "/static/media/people/AbbyFinn.WebP",
    "/static/media/people/AditiV-3.WebP",
    "/static/media/people/AhmedH.WebP",
    "/static/media/people/AlexDoytcheva.WebP",
    "/static/media/people/AlexandraTan.WebP",
    "/static/media/people/AllisonYang.WebP",
    "/static/media/people/AnaRyerson.WebP",
    "/static/media/people/AnantBajaj.WebP",
    "/static/media/people/AndrewDeng.WebP",
    "/static/media/people/AndrewWang.WebP",
    "/static/media/people/AnujArora.WebP",
    "/static/media/people/ArnavKadam.WebP",
    "/static/media/people/BellaK.WebP",
    "/static/media/people/bowiecooper.WebP",
    "/static/media/people/CaitlinRoberts.WebP",
    "/static/media/people/CaseyZhang.WebP",
    "/static/media/people/ChloeEmch.WebP",
    "/static/media/people/DavisRule.WebP",
    "/static/media/people/DeclanCoyle.WebP",
    "/static/media/people/EthanMatsuda.WebP",
    "/static/media/people/GracieHou.WebP",
    "/static/media/people/HayleyRobinson.WebP",
    "/static/media/people/insujung.WebP",
    "/static/media/people/JacksonKirkey.jpg",
    "/static/media/people/jademeister.jpg",
    "/static/media/people/jakelevin.jpg",
    "/static/media/people/JohnBorin.jpeg",
    "/static/media/people/JordanChen.jpeg",
    "/static/media/people/JustinH.jpg",
    "/static/media/people/KateriDarr.jpeg",
    "/static/media/people/KatieLee.jpg",
    "/static/media/people/kathrynnichols.jpg",
    "/static/media/people/KeeganKipke.jpeg",
    "/static/media/people/Kenan George-Nwogu.jpg",
    "/static/media/people/KianSandoval.jpg",
    "/static/media/people/KyleRitenour.jpeg",
    "/static/media/people/LandonMc.jpeg",
    "/static/media/people/LenaBibbo.jpg",
    "/static/media/people/LiadGross.jpg",
    "/static/media/people/LilyGong.jpeg",
    "/static/media/people/LucasRosenberg.jpg",
    "/static/media/people/LuluZhang.jpg",
    "/static/media/people/MeganGottfried.jpg",
    "/static/media/people/MichaelF-2.jpg",
    "/static/media/people/MinaliKapadia.jpeg",
    "/static/media/people/NandiniS.jpg",
    "/static/media/people/NathanL.jpg",
    "/static/media/people/PrestonWoodworth.jpg",
    "/static/media/people/SahithiNalamothu.jpg",
    "/static/media/people/SamWit.jpg",
    "/static/media/people/SamuelIlivicky.jpg",
    "/static/media/people/SamHanson.jpg",
    "/static/media/people/SanjanaKulkarni.jpg",
    "/static/media/people/SebRoclore.jpeg",
    "/static/media/people/ShivaniSundaresan.jpeg",
    "/static/media/people/StellaJohnson.jpeg",
    "/static/media/people/SupritaNagali.jpeg",
    "/static/media/people/timsmith.jpg",
    "/static/media/people/WinstonWu.jpg",
    "/static/media/people/YCPoon.jpg",
    "/static/media/people/zachfreed.jpg",
    "/static/media/people/ZainabIftikhar.jpeg",
    "/static/media/people/ZannahBaker.jpg",
    "/static/media/people/ZoeVickery.jpeg"
  ];

const BASE_URL = "https://tauepsilonkappa.com";

function Escape() {
    const navigate = useNavigate();
    const [randomImage, setRandomImage] = useState(
      `${BASE_URL}${memberImages[Math.floor(Math.random() * memberImages.length)]}`
    );
    const [animation, setAnimation] = useState({});
  
    // Function to change the image
    const changeImage = (type) => {
      if (type === "yes") {
        setAnimation({
          rotate: [0, 9720], // Full spin
          scale: [1, 1.2, 1], // Bounce effect
          transition: { duration: 0.8, ease: "easeInOut" } // Longer duration for full spin
        });
  
        // Wait for spin animation to finish before changing the image
        setTimeout(() => {
          const newRandomImage = `${BASE_URL}${memberImages[Math.floor(Math.random() * memberImages.length)]}`;
          setRandomImage(newRandomImage);
          setAnimation({ scale: 1, rotate: 0 }); // Reset animation
        }, 2000);
      } else {
        setAnimation({
          scale: [1, 1.5, 0], // Explosion effect
          opacity: [1, 0], // Fade out
          transition: { duration: 0.5, ease: "easeOut" }
        });
  
        // Wait for explosion animation to finish before changing the image
        setTimeout(() => {
          const newRandomImage = `${BASE_URL}${memberImages[Math.floor(Math.random() * memberImages.length)]}`;
          setRandomImage(newRandomImage);
          setAnimation({ scale: 1, opacity: 1 }); // Reset animation
        }, 500);
      }
    };
  
    return (
      <div className="new-page-container">
        {/* Animated Image */}
        <motion.img
          src={randomImage}
          alt="Random Member"
          className="centered-image"
          animate={animation}
        />
  
        {/* Centered Text */}
        <p className="centered-text">Bid or Not?</p>
  
        {/* Yes and No Buttons */}
        <div className="button-container">
          <button className="choice-button" onClick={() => changeImage("yes")}>
            Yes
          </button>
          <button className="choice-button" onClick={() => changeImage("no")}>
            No
          </button>
        </div>
      </div>
    );
  }

export default Escape;
