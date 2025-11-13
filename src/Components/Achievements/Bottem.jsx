import React from 'react'

const Bottem = () => {
  return (
    <div>
        <div className="mt-16 text-center">
        <div className="p-8 rounded-2xl bg-white shadow-xl border border-gray-100">
          <h3 className="text-2xl font-bold mb-4 gradient-text font-urbanist">
            Continuous Excellence
          </h3>
          <p className=" text-black text-lg leading-relaxed max-w-3xl mx-auto mb-6">
            These achievements represent not just recognition, but a commitment
            to continuous improvement, dedication to excellence, and the pursuit
            of mastery in both technical and personal development.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-yellow-400/10 text-yellow-400 rounded-full text-sm font-medium">
              Renewable energy training certificate
            </span>
            <span className="px-4 py-2 bg-blue-400/10 text-blue-400 rounded-full text-sm font-medium">
              Academic Achievement
            </span>
            <span className="px-4 py-2 bg-green-400/10 text-green-400 rounded-full text-sm font-medium">
              Scout & Guide (Rajya Puraskar Award)
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bottem