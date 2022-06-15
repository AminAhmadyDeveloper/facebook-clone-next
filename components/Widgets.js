import { DotsHorizontalIcon } from "@heroicons/react/solid"
import Contact from "./Contact"

const contacts = [
    {
        name: "Amin Ahmady",
        profile: "https://links.papareact.com/l4v"
    },
    {
        name: "Elon Musk",
        profile: "https://links.papareact.com/kxk"
    },
    {
        name: "Jeff Bezoz",
        profile: "https://links.papareact.com/f0p"
    },
    {
        name: "Mark Zuckerberg",
        profile: "https://links.papareact.com/snf"
    },
    {
        name: "Bill Gates",
        profile: "https://links.papareact.com/zvy"
    },
]

function Widgets() {
    return ( 
        <div className="hidden lg:flex flex-col p-2 mt-5">
            <div className="flex justify-between items-center text-gray-500 mb-5">
                <h2 className="text-xl">Contacts</h2>
                <div className="flex space-x-2">
                    <DotsHorizontalIcon className="h-6"/>
                </div>
            </div>
            <div>
                {
                    contacts.map((contact, contactIndex)=> {
                        return (
                            <Contact key={contactIndex} profile={contact.profile} name={contact.name}/>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Widgets;