import React from 'react'
import { motion } from 'framer-motion'

export default function EntryPoint(){
  return (
    <section id="ablehires" className="mt-16 pb-14">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="text-sm font-semibold text-ablue-600">PRODUCT</div>
          <h2 className="text-2xl md:text-3xl font-bold mt-3 text-ablue-900">Every movement starts with one door.</h2>
          <p className="mt-4 text-ablue-700">Introducing AbleHires — the verified entry point where talent meets opportunity. Built as the first door in Abledots' infrastructure.</p>
          <a href="#" className="mt-6 inline-flex items-center gap-3 px-5 py-3 rounded-full bg-ablue-600 text-white font-semibold btn-glow">Learn More About AbleHires</a>
        </div>

        <div className="flex justify-center md:justify-end">
          <motion.div whileHover={{ y: -6 }} className="w-[240px] sm:w-[320px] md:w-[360px]">
            <div className="relative perspective-1000">
              <div className="rounded-3xl overflow-hidden border border-gray-100 glass" style={{transform: 'rotateY(-10deg)'}}>
                <div className="p-6 bg-acream h-[420px] flex items-center justify-center">
                  <div className="w-36 h-72 bg-white rounded-2xl shadow-md relative border border-gray-100">
                    {/* door / light motif */}
                    <div className="absolute left-1/2 top-12 -translate-x-1/2 w-20 h-28 bg-gradient-to-b from-agold to-[#F9F6EE] rounded-md opacity-95 shadow-sm" />
                    <div className="absolute left-1/2 top-[68%] -translate-x-1/2 w-14 h-28 bg-white/90 rounded-md border border-gray-100" />
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center text-xs text-ablue-600">AbleHires — door opens to opportunity</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
