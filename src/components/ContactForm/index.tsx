'use client'

import { fadeUpAnimation } from '@/lib/animation'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { z } from 'zod'
import { SectionTitle } from '../SectionTitle'
import { Button } from '../Button'

const contactFormSchema = z.object({
  name: z.string().min(3).max(100),
  email: z.string().email(),
  message: z.string().min(1).max(500)
})

type ContactFormData = z.infer<typeof contactFormSchema>

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema)
  })

  const onSubmit = async (data: ContactFormData) => {
    try {
      await axios.post('/api/contact', data)
      toast.success('Message sent successfully!')
      reset()
    } catch (err) {
      toast.error('Unexpected error, please try again.')
    }
  }

  return (
    <section
      id="contact"
      className="py-16 px-6 md:py-32 flex items-center justify-center bg-gray-950 "
    >
      <div className="w-full max-w-[420px] mx-auto ">
        <div className="w-full flex items-center justify-center">
          <SectionTitle
            section="Contact"
            title="Let's work together? Get in touch."
            className="items-center text-center max-w-[300px]"
          />
        </div>

        <motion.form
          className="w-full flex flex-col gap-4 mt-12"
          onSubmit={handleSubmit(onSubmit)}
          {...fadeUpAnimation}
          transition={{ duration: 0.5 }}
        >
          <input
            className="w-full h-14 p-4 rounded-lg bg-gray-800 text-gray-50 placeholder:text-gray-400 focus:outline-none focus:ring-2 ring-emerald-600"
            type="text"
            placeholder="Name"
            {...register('name')}
          />
          <input
            className="w-full h-14 p-4 rounded-lg bg-gray-800 text-gray-50 placeholder:text-gray-400 focus:outline-none focus:ring-2 ring-emerald-600"
            type="email"
            placeholder="Name@domain.com"
            {...register('email')}
          />

          <textarea
            className="w-full h-[138px] p-4 rounded-lg resize-none bg-gray-800 text-gray-50 placeholder:text-gray-400 focus:outline-none focus:ring-2 ring-emerald-600"
            placeholder="Let's connect"
            maxLength={500}
            {...register('message')}
          />
          <Button
            className="w-max mx-auto mt-6 shadow-button"
            disabled={isSubmitting}
          >
            Send a message
            <HiArrowNarrowRight size={18} />
          </Button>
        </motion.form>
      </div>
    </section>
  )
}
