'use client'
import { ZodErrors } from "@/components/custom/zod-errors"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { useActionState } from "react"
import { useFormStatus } from "react-dom"
import { ContactSalesAction } from "./action"


const ContactForm = () => {
    const INITIAL_STATE = {
        data: null,
    };
    const [formState, formAction] = useActionState(ContactSalesAction, INITIAL_STATE);
    const { pending } = useFormStatus();
    return (
        <>
            <form
                action={formAction}
            >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <div>
                        <Label className="text-gray-800">NAME</Label>
                        <Input name="name" required className="py-6 bg-gray-100 mt-2" />
                        <ZodErrors error={formState?.zodErrors?.name} />
                    </div>
                    <div>
                        <Label className="text-gray-800">EMAIL</Label>
                        <Input name="email" required className="py-6 bg-gray-100 mt-2" />
                        <ZodErrors error={formState?.zodErrors?.email} />
                    </div>
                    <div className="lg:col-span-2">
                        <Label className="text-gray-800">MESSAGE</Label>
                        <Textarea name="message" required className="py-6 bg-gray-100 mt-2" />
                        <ZodErrors error={formState?.zodErrors?.message} />
                    </div>
                </div>
                <div className="flex gap-16 mt-10">
                    <div>
                        <Label className="text-gray-800">SERVICE</Label>
                        <Select name="service">
                            <SelectTrigger className="w-[280px] mt-5 bg-gray-100">
                                <SelectValue placeholder="Select the service" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="Website designing">Website designing</SelectItem>
                                    <SelectItem value="Custom app development">Custom app development</SelectItem>
                                    <SelectItem value="UI/UX design">UI/UX design</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <Label className="text-gray-800">BUDGET</Label>
                        <Select name="budget">
                            <SelectTrigger className="w-[280px] mt-5 bg-gray-100">
                                <SelectValue placeholder="Select the budget" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="₹50000">₹50000</SelectItem>
                                    <SelectItem value="₹100000">₹100000</SelectItem>
                                    <SelectItem value="₹110000-₹250000">₹110000-₹250000</SelectItem>
                                    <SelectItem value="₹260000">₹260000{">"}</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    
                </div>
                <div >
                        <div className="flex items-center gap-2 mt-10">
                            <Switch name="accept" />
                            <Label className="text-gray-800">Accept Privacy Policy</Label>
                        </div>
                        <ZodErrors error={formState?.zodErrors?.accept} />
                    </div>
                <div>
                    <Button variant='custom' size={"xl"} className="rounded-full mt-10">{pending ? 'Submitting...' : 'Submit'}</Button>
                </div>
                <p className="text-emerald-500 pt-5">{formState.message}</p>
            </form>
        </>
    )
}

export default ContactForm