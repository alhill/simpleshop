import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCuvTdiTdZNsC7zkeaZX3eM1vITq6nGjuU",
    authDomain: "book-shop-455611.firebaseapp.com",
    projectId: "book-shop-455611",
    storageBucket: "book-shop-455611.firebasestorage.app",
    messagingSenderId: "885002771123",
    appId: "1:885002771123:web:ae49998e17d0fd19546ec6",
    measurementId: "G-V8X433R1PD"
};

export const app = initializeApp(firebaseConfig);