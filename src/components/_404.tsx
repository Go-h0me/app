import { Link } from 'react-router-dom';

import { MdSentimentVeryDissatisfied } from 'react-icons/md';

export default function _404() {
    return (
        <div className="space-y-6 rounded-md bg-white py-5 text-center shadow dark:bg-gray-800">
            <div className="flex justify-center">
                <MdSentimentVeryDissatisfied className="lex-shrink-0 h-12 w-12"></MdSentimentVeryDissatisfied>
            </div>
            <h4 className="text-xl font-bold">This page is not available</h4>
            <h5 className="text-lg">The link you followed may be broken, or the page may have been removed.</h5>
            <p>
                <Link to="/" className="text-indigo-500 font-bold hover:underline">
                    HOME PAGE
                </Link>
            </p>
        </div>
    );
}
