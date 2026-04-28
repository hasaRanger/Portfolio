'use client'

import { useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { motion } from 'framer-motion'
import TypewriterText from '../../components/ui/TypewriterText'
import { Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react'

interface FormState {
    firstName: string
    lastName: string
    email: string
    subject: string
    message: string
}

type Status = 'idle' | 'loading' | 'success' | 'error'

const inputStyle = {
    width: '100%',
    backgroundColor: '#1a1a1a',
    border: '1px solid #3e3e3e',
    borderRadius: '2px',
    padding: '10px 12px',
    fontSize: '12px',
    color: '#d4d4d4',
    fontFamily: 'var(--font-mono)',
    outline: 'none',
    transition: 'border-color 0.15s',
}

const labelStyle = {
    display: 'block',
    fontSize: '11px',
    color: '#858585',
    marginBottom: '6px',
    letterSpacing: '0.04em',
}

export default function Contact() {
    const ref = useRef<HTMLElement | null>(null)
    const isInView = useInView(ref, { once: true, margin: '-60px' })

    const [form, setForm] = useState<FormState>({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: '',
    })
    const [status, setStatus] = useState<Status>('idle')
    const [errorMsg, setErrorMsg] = useState('')

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        e.currentTarget.style.borderColor = '#007acc'
    }

    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        e.currentTarget.style.borderColor = '#3e3e3e'
    }

    const handleSubmit = async (e: React.MouseEvent) => {
        e.preventDefault()
        if (!form.firstName || !form.email || !form.subject || !form.message) {
            setStatus('error')
            setErrorMsg('Please fill in all required fields.')
            return
        }

        setStatus('loading')
        setErrorMsg('')

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            })

            const data = await res.json()

            if (!res.ok) {
                throw new Error(data.error || 'Something went wrong')
            }

            setStatus('success')
            setForm({ firstName: '', lastName: '', email: '', subject: '', message: '' })

        } catch (err: unknown) {
            setStatus('error')
            setErrorMsg(err instanceof Error ? err.message : 'Failed to send message.')
        }
    }

    return (
        <section
            id="contact"
            ref={ref}
            style={{
                paddingTop: '64px',
                paddingBottom: '80px',
                borderTop: '1px solid #2d2d2d',
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.5s ease, transform 0.5s ease',
            }}
        >
            {/* Section heading */}
            <div style={{ marginBottom: '8px' }}>
                <TypewriterText
                    text="async"
                    tag="span"
                    className="text-[12px] text-[#569cd6] mr-3"
                    speed={50}
                />
                <TypewriterText
                    text="CONTACT_ME"
                    tag="span"
                    className="text-lg font-bold text-[#4ec9b0] tracking-wide"
                    delay={200}
                    speed={50}
                />
            </div>

            {/* HTML comment style subheading */}
            {/* <p style={{ color: '#6a9955', fontSize: '12px', marginBottom: '40px' }}>
                {'<!-- Get in Touch -->'}
            </p> */}
            <TypewriterText
                    text="<!-- Get in Touch -->"
                    tag="p"
                    className="text-[12px] text-[#6a9955] mb-10"
                    delay={300}
                    speed={50}
                />

            {/* Two-column layout */}
            <div
                style={{
                    gap: '48px',
                }}
                className="flex flex-col md:grid md:grid-cols-[1fr_1.4fr] md:items-start"
            >
                {/* Left — big heading */}
                <div>
                    <div style={{ marginBottom: '16px', fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 700, lineHeight: 1.15, fontFamily: 'var(--font-mono)' }}>
                        <TypewriterText
                            text="Let's Work "
                            tag="span"
                            className="text-[#d4d4d4]"
                            delay={300}
                            speed={40}
                        />
                        <TypewriterText
                            text="Together"
                            tag="span"
                            className="text-[#555]"
                            delay={800}
                            speed={40}
                        />
                    </div>
                    <TypewriterText
                        text="Have a project in mind?"
                        tag="p"
                        className="text-xs text-[#555] leading-relaxed"
                        delay={1200}
                        speed={12}
                    />
                    <TypewriterText
                        text="Drop me a message and I'll get back to you."
                        tag="p"
                        className="text-xs text-[#555] leading-relaxed"
                        delay={1500}
                        speed={12}
                    />
                </div>

                {/* Right — form */}
                <motion.div
                    style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.8, ease: 'easeOut' }}
                >

                    {/* First + Last name row */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                        <div>
                            <label style={labelStyle}>
                                First name<span style={{ color: '#ce9178' }}>*</span>
                            </label>
                            <input
                                name="firstName"
                                value={form.firstName}
                                onChange={handleChange}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                                placeholder="Mazakine"
                                style={inputStyle}
                            />
                        </div>
                        <div>
                            <label style={labelStyle}>
                                Last name<span style={{ color: '#858585' }}></span>
                            </label>
                            <input
                                name="lastName"
                                value={form.lastName}
                                onChange={handleChange}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                                placeholder="Reed"
                                style={inputStyle}
                            />
                        </div>
                    </div>

                    {/* Email */}
                    <div>
                        <label style={labelStyle}>
                            Email address<span style={{ color: '#ce9178' }}>*</span>
                        </label>
                        <input
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            placeholder="example@gmail.com"
                            style={inputStyle}
                        />
                    </div>

                    {/* Subject */}
                    <div>
                        <label style={labelStyle}>
                            Subject<span style={{ color: '#ce9178' }}>*</span>
                        </label>
                        <input
                            name="subject"
                            value={form.subject}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            placeholder="Tell us the purpose"
                            style={inputStyle}
                        />
                    </div>

                    {/* Message */}
                    <div>
                        <label style={labelStyle}>
                            Message<span style={{ color: '#ce9178' }}>*</span>
                        </label>
                        <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            placeholder="Write your message here"
                            rows={5}
                            style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }}
                        />
                    </div>

                    {/* Error message */}
                    {status === 'error' && (
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                padding: '10px 12px',
                                backgroundColor: '#2d1515',
                                border: '1px solid #5a2020',
                                borderRadius: '2px',
                                fontSize: '12px',
                                color: '#f48771',
                            }}
                        >
                            <AlertCircle size={14} />
                            {errorMsg}
                        </div>
                    )}

                    {/* Success message */}
                    {status === 'success' && (
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                padding: '10px 12px',
                                backgroundColor: '#0e2d1a',
                                border: '1px solid #1a5c32',
                                borderRadius: '2px',
                                fontSize: '12px',
                                color: '#4ec9b0',
                            }}
                        >
                            <CheckCircle size={14} />
                            Message sent! I&apos;ll get back to you soon.
                        </div>
                    )}

                    {/* Submit button */}
                    <button
                        onClick={handleSubmit}
                        disabled={status === 'loading' || status === 'success'}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '8px',
                            padding: '11px 24px',
                            backgroundColor: status === 'success' ? '#0e2d1a' : '#ffffff',
                            color: status === 'success' ? '#4ec9b0' : '#1e1e1e',
                            border: 'none',
                            borderRadius: '2px',
                            fontSize: '12px',
                            fontWeight: 600,
                            fontFamily: 'var(--font-mono)',
                            cursor: status === 'loading' || status === 'success' ? 'not-allowed' : 'pointer',
                            opacity: status === 'loading' ? 0.7 : 1,
                            letterSpacing: '0.04em',
                            transition: 'opacity 0.15s, background-color 0.2s',
                            alignSelf: 'flex-start',
                        }}
                    >
                        {status === 'loading' ? (
                            <>
                                <Loader2 size={14} style={{ animation: 'spin 1s linear infinite' }} />
                                Sending...
                            </>
                        ) : status === 'success' ? (
                            <>
                                <CheckCircle size={14} />
                                Sent!
                            </>
                        ) : (
                            <>
                                <Send size={14} />
                                Send message
                            </>
                        )}
                    </button>

                </motion.div>
            </div>
        </section>
    )
}