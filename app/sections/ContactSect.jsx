import Link from 'next/link';
import ContactForm from '../components/form/ContactForm';
import RenderedLinkSosmed from '../components/link/RenderedLinkSosmed';

function ContactSect() {
  return (
    <section
      id="contact"
      className="scroll-mt-5 flex flex-col gap-14 padding-inline pt-24 mt-10 lg:min-h-screen"
    >
      <h1 className="text-center text-5xl md:text-[2.5rem] lg:text-[4rem] leading-tight font-semibold bg-gradient-to-r from-blue-800 to-blue-500 bg-clip-text text-transparent">
        Contact
      </h1>
      <p className="text-center text-slate-900">
        I am ready to hear from you! Contact me via{' '}
        <Link href="" className="hover:text-blue-600">
          WhatsApp
        </Link>
        ,{' '}
        <Link href="" className="hover:text-blue-600">
          email
        </Link>
        , or{' '}
        <Link href="" className="hover:text-blue-600">
          LinkedIn
        </Link>
        , or simply fill out the contact form below.
      </p>

      <RenderedLinkSosmed />

      <div className="w-full min-[900px]:w-4/5 mx-auto relative border-divide my-4 text-center">
        or
      </div>

      <ContactForm />
    </section>
  );
}

export default ContactSect;
