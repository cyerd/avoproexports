import Header from "@/components/header";
import Head from "next/head";

export default function Features() {
  return (
    <>
      <Header/>

      {/* Hero Section */}
      <section
        style={{
          height: "100vh",
          backgroundImage: "url('/images/bgbanner.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          textAlign: "center",
        }}
      >
        <div>
          <h1 className="bg-green-300 p-2 opacity-80 rounded-lg" style={{ fontSize: "4rem", marginBottom: "1rem" }}>Benefits of Avocado Oil</h1>
          <p className="bg-green-200 p-2 opacity-80 rounded-lg" style={{ fontSize: "1.5rem" }}>Nourish your body and skin naturally.</p>
        </div>
      </section>

      {/* Information Section */}
      <section className="flex items-center justify-center" style={{ padding: "3rem 1.5rem", backgroundColor: "#f4f4f4", textAlign: "center" }}>
           <img
          src="/images/avofruit.png"
          alt="Avocado Oil"
          style={{ maxWidth: "10%", borderRadius: "8px" }}
        />
        <div>
        <h2 style={{ fontSize: "2.5rem", marginBottom: "1.5rem" }}>Why Choose Avocado Oil?</h2>
        <p style={{ fontSize: "1.2rem", maxWidth: "800px", margin: "0 auto 2rem" }}>
          Avocado oil is rich in healthy fats, vitamins, and antioxidants. It promotes heart health, enhances skin
          hydration, and improves overall well-being. Whether you use it for cooking or skincare, avocado oil is a
          versatile, natural solution.
        </p>
        </div>
     
      </section>

      

    </>
  );
}
