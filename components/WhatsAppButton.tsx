"use client";

export default function WhatsAppButton() {
  const phoneNumber = "918890002728";

  const message =
    "I want to explore all your property and know the booking process";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Manav Stays on WhatsApp"
      className="
        fixed
        right-5
        bottom-5
        sm:right-6
        sm:bottom-6
        z-[9999]
        flex
        h-14
        w-14
        sm:h-16
        sm:w-16
        items-center
        justify-center
        rounded-full
        bg-[#25D366]
        text-white
        shadow-[0_8px_30px_rgba(37,211,102,0.35)]
        transition-all
        duration-300
        hover:scale-110
        hover:shadow-[0_10px_35px_rgba(37,211,102,0.5)]
        active:scale-95
      "
    >
      {/* WhatsApp Icon */}
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7 sm:h-8 sm:w-8"
        aria-hidden="true"
      >
        <path
          d="M16 3C8.82 3 3 8.82 3 16C3 18.3 3.6 20.47 4.65 22.36L3.1 28.5L9.39 26.99C11.27 28.02 13.43 28.61 15.99 28.61C23.17 28.61 28.99 22.79 28.99 15.61C28.99 8.82 23.18 3 16 3Z"
          fill="currentColor"
        />

        <path
          d="M22.04 18.73C21.72 18.57 20.15 17.8 19.86 17.69C19.57 17.58 19.36 17.53 19.15 17.85C18.94 18.17 18.34 18.89 18.16 19.1C17.98 19.31 17.79 19.33 17.47 19.17C17.15 19.01 16.12 18.67 14.9 17.58C13.95 16.73 13.31 15.68 13.13 15.36C12.95 15.04 13.11 14.86 13.27 14.7C13.42 14.55 13.59 14.32 13.75 14.14C13.91 13.96 13.96 13.83 14.07 13.62C14.18 13.41 14.12 13.23 14.04 13.07C13.96 12.91 13.33 11.34 13.07 10.7C12.81 10.08 12.54 10.16 12.35 10.15C12.17 10.14 11.96 10.14 11.75 10.14C11.54 10.14 11.2 10.22 10.91 10.54C10.62 10.86 9.8 11.63 9.8 13.2C9.8 14.77 10.94 16.28 11.1 16.49C11.26 16.7 13.35 19.92 16.55 21.3C17.31 21.63 17.91 21.82 18.38 21.96C19.14 22.2 19.83 22.17 20.37 22.09C20.98 22 22.25 21.32 22.52 20.58C22.79 19.84 22.79 19.21 22.71 19.08C22.63 18.95 22.36 18.89 22.04 18.73Z"
          fill="#25D366"
        />
      </svg>

      {/* Notification Dot */}
      <span className="absolute right-0 top-0 h-3 w-3 rounded-full border-2 border-obsidian bg-gold" />
    </a>
  );
}