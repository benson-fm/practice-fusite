import { Disclosure} from '@headlessui/react';

import { AnimatePresence, motion } from 'framer-motion';
// eslint-disable-next-line react/prop-types
function DisclosureButtonComponent({ question, answer }) {
  return (
    <Disclosure as="div" className="w-full max-w-md">
      {({ open }) => (
        <>
          <Disclosure.Button className="w-full border-b pb-2 text-left font-semibold text-lg text-black-600 hover:bg-blue-200 underline">
            {question}
          </Disclosure.Button>
          <div className="overflow-hidden py-2">
            <AnimatePresence>
              {open && (
                <Disclosure.Panel
                  static
                  as={motion.div}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="origin-top"
                >
                  {answer}
                </Disclosure.Panel>
              )}
            </AnimatePresence>
          </div>
        </>
      )}
    </Disclosure>
  );
}

export default DisclosureButtonComponent;