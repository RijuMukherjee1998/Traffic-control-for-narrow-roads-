from imageai.Detection import ObjectDetection
import os

def m():
    c=''
    execution_path = os.getcwd()
    count = 0#counter
    detector = ObjectDetection()
    detector.setModelTypeAsRetinaNet()
    detector.setModelPath( os.path.join(execution_path , "resnet50_coco_best_v2.0.1.h5"))
    detector.loadModel()
    detections = detector.detectObjectsFromImage(input_image=os.path.join(execution_path , "image.jpg"), output_image_path=os.path.join(execution_path , "imagenew.jpg"))

    for eachObject in detections:
        if eachObject["name"]=="car":
            count+=1
    if(count>5):
        print("\nAlert!!!\n***High Traffic***")

        #print(eachObject["name"] , " : " , eachObject["percentage_probability"] )
    print(count)
    #print("\n")
    c=str(count)
    file = open('t1.txt','w')
    file.write(c)


if __name__ == "__main__":
    #print("Hello")
    m()
