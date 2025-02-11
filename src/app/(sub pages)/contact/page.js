import Image from "next/image";
import bg from "../../../../public/background/contacts-background.png";
import Form from "@/components/contact/Form";

export default function Contact() {
  return (
    <>
      <Image
        src={bg}
        alt="background-image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25"
      />
      <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          <h1 className="text-accent font-semibold py-14 text-center text-4xl capitalize">
            summon the wizard
          </h1>
          <p className="text-center font-light py-1 text-sm xs:text-base">
            Beyond the veil of the mundane, where time bends and shadows dance,
            the Grand Arcane awaits your call. Should you seek wisdom,
            alliances, or the unraveling of fate’s grand design, inscribe your
            request upon the sacred scroll below. With a whisper of incantations
            and a flicker of unseen forces, your words shall be carried through
            the ether. When the cosmos aligns and the runes ignite, a reply
            shall emerge—perhaps as a whisper in the wind, a spark in the dark,
            or a vision in the stillness of the night. Step forth, brave seeker,
            and let the summoning begin.
          </p>
        </div>
        <Form />
      </article>
    </>
  );
}
