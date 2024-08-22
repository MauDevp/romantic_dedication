// @ts-nocheck
// components/RomanticQuotes.js
export default function RomanticQuotes({ quotes }) {
    return (
        <div className="space-y-6 text-center">
            {quotes.map((quote, index) => (
                <p key={index} className="text-xl font-semibold text-pink-600">
                    {quote}
                </p>
            ))}
        </div>
    );
}
