export default function Footer() {
  return (
    <footer className="bg-orange-400 text-white py-10 px-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-8">

        <div>
          <h2 className="text-2xl font-bold mb-3">Travel</h2>
          <p className="text-sm">
            Your trusted travel partner for amazing destinations.
          </p>
        </div>

        <div>
          <h3 className="font-bold mb-3">Our Destinations</h3>
          <ul className="space-y-2 text-sm">
            <li>Bali</li>
            <li>Paris</li>
            <li>Dubai</li>
            <li>Tokyo</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-3">Our Activities</h3>
          <ul className="space-y-2 text-sm">
            <li>Mountain Trip</li>
            <li>Beach Holiday</li>
            <li>Adventure</li>
            <li>Camping</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-3">Travel Blogs</h3>
          <ul className="space-y-2 text-sm">
            <li>Travel Guide</li>
            <li>Best Places</li>
            <li>Trip Tips</li>
            <li>World Tour</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-3">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li>+91 9876543210</li>
            <li>travel@email.com</li>
            <li>Mumbai, India</li>
          </ul>
        </div>

      </div>
    </footer>
  );
}