import type { Meta, StoryObj } from '@storybook/react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Settings } from "lucide-react";

const ModalWrapper = (args: any) => (
  <Dialog defaultOpen>
    <DialogTrigger asChild>
      <Button variant="outline">Open Modal</Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>{args.title || "Edit profile"}</DialogTitle>
        <DialogDescription>
          {args.description || "Make changes to your profile here. Click save when you're done."}
        </DialogDescription>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="name" className="text-right">
            Name
          </Label>
          <Input id="name" defaultValue="Pedro Duarte" className="col-span-3" />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="username" className="text-right">
            Username
          </Label>
          <Input id="username" defaultValue="@peduarte" className="col-span-3" />
        </div>
      </div>
      <DialogFooter>
        <Button type="submit">Save changes</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);

const meta = {
  title: 'UI/Modal',
  component: Dialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  render: (args) => <ModalWrapper {...args} />,
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    // @ts-ignore
    title: "Edit Profile",
    // @ts-ignore
    description: "Make changes to your profile here. Click save when you're done."
  },
};

export const SettingsModal: Story = {
  render: () => (
    <Dialog defaultOpen>
      <DialogTrigger asChild>
        <Button variant="outline"><Settings className="mr-2 h-4 w-4"/> Settings</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Settings</DialogTitle>
          <DialogDescription>
            Manage your application preferences.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4 space-y-4">
            <div className="flex items-center justify-between">
                <Label>Dark Mode</Label>
                <Button variant="outline" size="sm">Toggle</Button>
            </div>
            <div className="flex items-center justify-between">
                <Label>Notifications</Label>
                <Button variant="outline" size="sm">Configure</Button>
            </div>
        </div>
        <DialogFooter>
            <Button variant="secondary">Cancel</Button>
            <Button>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
};
