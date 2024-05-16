import React from "react";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import './Faq.css'; // Import your custom CSS file

export const Faq = ({ data = [] }) => {
    return (
        <div className="faq-container">
            <div className="faq-content">
                <h2 className="faq-title">Frequently asked questions</h2>
                <dl className="faq-list">
                    {data.map((faq) => (
                        <Disclosure as="div" key={faq.question} className="faq-item">
                            {({ open }) => (
                                <>
                                    <dt>
                                        <DisclosureButton className="faq-button">
                                            <span className="faq-question">{faq.question}</span>
                                            <span className="faq-icon">
                                                {open ? (
                                                    <MinusIcon className="icon" aria-hidden="true" />
                                                ) : (
                                                    <PlusIcon className="icon" aria-hidden="true" />
                                                )}
                                            </span>
                                        </DisclosureButton>
                                    </dt>
                                    <DisclosurePanel as="dd" className="faq-answer">
                                        <p>{faq.answer}</p>
                                    </DisclosurePanel>
                                </>
                            )}
                        </Disclosure>
                    ))}
                </dl>
            </div>
        </div>
    );
};
