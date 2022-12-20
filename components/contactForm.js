import Link from "next/link";

export default function ContactForm() {
  return (
    <form name="contact" method="POST" data-netlify="true">
      <div className="flex flex-col sm:flex-row">
        <div className="w-full sm:w-1/2 mb-8">
          <input type="hidden" name="form-name" value="contact" />
          <label htmlFor="name" className="block mb-1 font-semibold">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="block w-full mb-4 bg-neutral-900 bg-opacity-10 border-slate-700 border rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:border-slate-700 focus:ring-1 focus:ring-slate-700"
          />
          <label htmlFor="email" className="block mb-1 font-semibold">
            Email *
          </label>
          <input
            type="text"
            id="email"
            name="email"
            className="block w-full bg-neutral-900 bg-opacity-10 border-slate-700 border rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:border-slate-700 focus:ring-1 focus:ring-slate-700"
          />
        </div>
        <div className="w-full sm:w-1/2 ml-0 sm:ml-12">
          <label htmlFor="message" className="block mb-1 font-semibold">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            className="h-32 mb-4 resize-none block w-full bg-neutral-900 bg-opacity-10 border-slate-700 border rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:border-slate-700 focus:ring-1 focus:ring-slate-700"
          ></textarea>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="align-top px-3 py-2 mr-2 sm:text-base sm:py-3 sm:px-6 text-gray-200 bg-slate-700 rounded-full"
        >
          Send message
        </button>
      </div>
    </form>
  );
}
