"use client";

import { InputField, SectionHeader } from "@/components/ui/form";
import SectionCard from "../shared/SectionCard";

export default function PersonalInfoSection() {
  return (
    <SectionCard>
      <SectionHeader
        title="Personal Information"
        description="Add your basic contact and professional details."
      />

      <div className="grid gap-6 md:grid-cols-2">
        <InputField
          name="title"
          label="Resume Title"
          placeholder="Software Engineer Resume"
        />

        <InputField
          name="jobTitle"
          label="Job Title"
          placeholder="Technical Support Engineer"
        />

        <InputField
          name="fullName"
          label="Full Name"
          placeholder="John Doe"
        />

        <InputField
          name="email"
          type="email"
          label="Email"
          placeholder="john@example.com"
        />

        <InputField
          name="phone"
          label="Phone"
          placeholder="+91 9876543210"
        />

        <InputField
          name="location"
          label="Location"
          placeholder="Hyderabad"
        />

        <InputField
          name="website"
          label="Website"
          placeholder="https://yourwebsite.com"
        />

        <InputField
          name="linkedin"
          label="LinkedIn"
          placeholder="https://linkedin.com/in/username"
        />

        <div className="md:col-span-2">
          <InputField
            name="github"
            label="GitHub"
            placeholder="https://github.com/username"
          />
        </div>
      </div>
    </SectionCard>
  );
}