import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">

            <div className="text-center">

                <h1 className="text-8xl font-bold text-purple-600">
                    404
                </h1>

                <h2 className="text-3xl font-bold text-gray-800 mt-4">
                    Page Not Found
                </h2>

                <p className="text-gray-500 mt-3">
                    Sorry, the page you are looking for does not exist.
                </p>

                <Link
                    to="/"
                    className="inline-block mt-6 px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition"
                >
                    Go Back Home
                </Link>

            </div>

        </div>
    );
};


export default ErrorPage;