import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


import React, {useState} from 'react';
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Switch} from "@/components/ui/switch";
import {Button} from "@/components/ui/button";
import {Loader2Icon, Sparkle} from "lucide-react";
import axios from "axios";
import {v4 as uuidv4} from "uuid";


function AddNewCourseDialog({children}) {

    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        description: "",
        noOfChapter:1,
        category: "",
        includeVideo: false,
        level:""
    });

    const onHandleInputChange = (field,value) => {
        setFormData(prev => ({...prev, [field]: value}))
    }

    const onGenerate =async ()=>{
        console.log(formData);
        const courseId = uuidv4();
        try {
            setLoading(true);
            const result=await axios.post("/api/generate-course-layout",{formData,courseId:courseId});
            console.log(result.data);
            setLoading(false);
            router.push("/workspace/edit-course/"+result.data?.courseId);
        } catch (e){
            setLoading(false);
            console.log(e);
        }

    }

    return (
        <div>
            <Dialog>
                <DialogTrigger asChild>{children}</DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Tạo khóa học mới bằng AI</DialogTitle>
                        <DialogDescription asChild>
                            <div className={"flex flex-col gap-4 mt-3"}>
                                <div>
                                    <label>Tên khóa học</label>
                                    <Input placeholder={"Ví dụ: Guitar cho người mới"} onChange={(event)=>onHandleInputChange("name",event?.target.value)} />
                                </div>
                                <div>
                                    <label>Mô tả khóa học</label>
                                    <Textarea placeholder={"Ví dụ: Chơi guitar sau 15'"} onChange={(event)=>onHandleInputChange("description",event?.target.value)}/>
                                </div>
                                <div>
                                    <label>Số bài học</label>
                                    <Input placeholder={"Ví dụ: 5" } type="number" onChange={(event)=>onHandleInputChange("noOfChapter",event?.target.value)}/>
                                </div>
                                <div className={"flex gap-3 items-center"}>
                                    <label>Kèm Video</label>
                                    <Switch
                                    onCheckedChange={() =>onHandleInputChange("includeVideo",!formData?.includeVideo)}/>
                                </div>
                                <div>
                                    <label>Độ khó</label>
                                    <Select onValueChange={(value)=>onHandleInputChange("level",value)}>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Cấp độ" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="beginner">Nhập môn</SelectItem>
                                            <SelectItem value="moderate">Trung cấp</SelectItem>
                                            <SelectItem value="advanced">Nâng cao</SelectItem>
                                        </SelectContent>
                                    </Select>

                                </div>
                                <div>
                                    <label>Chủ đề</label>
                                    <Input placeholder={"Ví dụ: Âm nhạc"} onChange={(event)=>onHandleInputChange("category",event?.target.value)}/>
                                </div>

                                <div className={"mt-5"}>
                                    <Button className={"w-full"} onClick={onGenerate} disabled={loading}>
                                        {loading? <Loader2Icon className={"animate-spin"}/>:<Sparkle/> } Tạo khóa học</Button>
                                </div>
                            </div>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>

        </div>
    );
}

export default AddNewCourseDialog;